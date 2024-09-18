import { textNodeStore } from "./text-node-tore";

interface TextNode {
  element: ChildNode;
  originalText: string;
}

// Tạo hàm để lấy text nodes của một phần tử cụ thể
const getTextNodesFromElement = (element: HTMLElement): TextNode[] => {
  const textNodes: TextNode[] = [];

  element.childNodes.forEach((node) => {
    if (
      node.nodeType === Node.TEXT_NODE &&
      node?.textContent?.trim() !== ""
    ) {
      if (!textNodeStore.has(node)) {
        textNodeStore.set(node, node.textContent || "");
      }
      textNodes.push({ element: node, originalText: node.textContent || "" });
    }
  });

  return textNodes;
};

// Hàm dịch chỉ một phần nội dung cụ thể
export const translateSpecificText = async (
  element: HTMLElement, // Phần tử mà bạn muốn dịch (có thể là tab hoặc div cụ thể)
  targetLanguage: string
): Promise<void> => {
  const textNodes = getTextNodesFromElement(element);

  if (targetLanguage === "vi") {
    // Nếu ngôn ngữ là tiếng Việt, khôi phục lại văn bản gốc
    textNodes.forEach((node) => {
      node.element.textContent =
        textNodeStore.get(node.element) || node.originalText;
    });
    return;
  }

  const apiKey = "AIzaSyB_pcYtjwsET9KxyoUBJW0DaJodx3N9MmI";
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const textsToTranslate = textNodes.map((node) => node.originalText);

  const data = {
    q: textsToTranslate,
    target: targetLanguage,
    // source: "vi",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    const translations = result.data.translations;

    textNodes.forEach((node, index) => {
      const translatedText = translations[index].translatedText || node.originalText;
      node.element.textContent = translatedText;
      textNodeStore.set(node.element, translatedText); // Lưu lại nội dung đã dịch vào store
    });
  } catch (error) {
    console.error(`Có lỗi khi dịch nội dung`, error);
  }
};
