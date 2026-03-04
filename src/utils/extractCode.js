export function extractCode(response) {
    if (!response) return "";

      const match = response.match(/```(?:html|javascript|jsx)?\n([\s\S]*?)```/);

        if (match && match[1]) {
            return match[1].trim();
              }

                return response.trim();
                }
