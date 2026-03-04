import { useEffect, useState } from "react";

const PreviewPanel = ({ code }) => {
  const [src, setSrc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
              setSrc(code);
                  }, 300);

                      return () => clearTimeout(timeout);
                        }, [code]);

                          return (
                              <iframe
                                    title="preview"
                                          srcDoc={src}
                                                sandbox="allow-scripts"
                                                      frameBorder="0"
                                                            width="100%"
                                                                  height="100%"
                                                                        className="bg-white rounded-xl"
                                                                            />
                                                                              );
                                                                              };

                                                                              export default PreviewPanel;