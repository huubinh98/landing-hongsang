import { textNodeStore } from "@/helper/text-node-tore";
import { useState, useEffect } from "react";

interface TextNode {
  element: Node;
  originalText: string | null;
}

const useTranslation = (defaultLanguage = "vi") => {
  const [currentLanguage, setCurrentLanguage] =
    useState<string>(defaultLanguage);

  useEffect(() => {
    // Khi component được mount, đọc ngôn ngữ từ localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Khi currentLanguage thay đổi, lưu ngôn ngữ vào localStorage
    localStorage.setItem("language", currentLanguage);
    translateAllText(currentLanguage);
  }, [currentLanguage]);

  // Function to get all text nodes of elements
  const getAllTextNodes = (): TextNode[] => {
    const elements = document.querySelectorAll(
      "header, footer, section, article, aside, nav, main, div, h1, h2, h3, h4, h5, h6, p, span, a, li, strong, em, b, i, label, button, blockquote, cite, figcaption, q, time, mark, small, abbr, dfn, caption, th, td, input, textarea"
    );

    elements.forEach((element) => {
      if (element.hasAttribute("placeholder")) {
        console.log(
          `Element ${element.tagName} has placeholder: ${element.getAttribute(
            "placeholder"
          )}`
        );
      }

      if (element.hasAttribute("dangerouslySetInnerHTML")) {
        console.log(
          `Element ${
            element.tagName
          } has dangerouslySetInnerHTML: ${element.getAttribute(
            "dangerouslySetInnerHTML"
          )}`
        );
      }
    });

    const textNodes: TextNode[] = [];
    elements.forEach((el) => {
      el.childNodes.forEach((node) => {
        if (
          node.nodeType === Node.TEXT_NODE &&
          node?.textContent?.trim() !== ""
        ) {
          if (!textNodeStore.has(node)) {
            textNodeStore.set(node, node.textContent || "");
          }
          textNodes.push({
            element: node,
            originalText: node.textContent || "",
          });
        }
      });
    });
    return textNodes;
  };

  // Function to translate all text on the page
  const translateAllText = async (targetLanguage: string) => {
    const textNodes = getAllTextNodes();

    if (targetLanguage === "vi") {
      textNodes.forEach((node) => {
        if (node.element instanceof Text) {
          // Kiểm tra và khôi phục văn bản gốc
          node.element.textContent =
            textNodeStore.get(node.element) || node.originalText;
        }
      });
      return;
    }

    setCurrentLanguage(targetLanguage);

    const translatedTextMap: { [key: number]: string } = {};
    const apiKey = "AIzaSyB_pcYtjwsET9KxyoUBJW0DaJodx3N9MmI"; // Replace with your actual API Key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    for (let i = 0; i < textNodes.length; i++) {
      const data = {
        q: textNodes[i].originalText,
        target: targetLanguage,
        source: "vi",
      };
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        translatedTextMap[i] = result.data.translations[0].translatedText;
      } catch (error) {
        console.error(`Error translating: ${textNodes[i].originalText}`, error);
      }
    }

    textNodes.forEach((node, index) => {
      node.element.textContent = translatedTextMap[index];
    });
  };

  return { currentLanguage, translateAllText };
};

export default useTranslation;
