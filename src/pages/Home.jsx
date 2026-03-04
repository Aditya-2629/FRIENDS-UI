import { useState } from "react";
import Navbar from "../components/Navbar";
import GeneratorForm from "../components/GeneratorForm";
import OutputPanel from "../components/OutputPanel";

import { generateUIStream } from "../services/ai.service";
import { extractCode } from "../utils/extractCode";

import { toast } from "react-toastify";

const Home = () => {

const options = [
{ value: "html-css", label: "HTML + CSS" },
{ value: "html-tailwind", label: "HTML + Tailwind CSS" },
{ value: "html-bootstrap", label: "HTML + Bootstrap" },
{ value: "html-css-js", label: "HTML + CSS + JS" },
{ value: "html-tailwind-bootstrap", label: "HTML + Tailwind + Bootstrap" },
];

const [prompt, setPrompt] = useState("");
const [framework, setFramework] = useState(options[0]);
const [code, setCode] = useState("");
const [loading, setLoading] = useState(false);

const handleGenerate = async () => {

if (!prompt.trim()) {
  return toast.error("Enter description");
  }

  try {

    setLoading(true);
      setCode("");

        await generateUIStream(
            prompt,
                framework.value,

                    (partialText) => {

                          const extracted = extractCode(partialText);

                                setCode(extracted);

                                    }
                                      );

                                      } catch (error) {

                                        console.error(error);
                                          toast.error("Generation failed");

                                          } finally {

                                            setLoading(false);

                                            }

                                            };

                                            return (
                                            <>
                                            <Navbar />

                                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 py-6">

                                                  <GeneratorForm
                                                        prompt={prompt}
                                                              setPrompt={setPrompt}
                                                                    framework={framework}
                                                                          setFramework={setFramework}
                                                                                options={options}
                                                                                      loading={loading}
                                                                                            onGenerate={handleGenerate}
                                                                                                />

                                                                                                {code && (
                                                                                                        <OutputPanel
                                                                                                                code={code}
                                                                                                                      />
                                                                                                                          )}
                                                                                                

                                                                                                                              </div>

                                                                                                                              </>

                                                                                                                              );
                                                                                                                              };

                                                                                                                              export default Home;