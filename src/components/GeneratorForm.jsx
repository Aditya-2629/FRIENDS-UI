import Select from "react-select";
import { BsStars } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const selectStyles = {
control: (base, state) => ({
...base,
backgroundColor: "#0f0f13",
borderColor: state.isFocused ? "#a855f7" : "#2a2a2e",
boxShadow: "none",
"&:hover": { borderColor: "#a855f7" },
minHeight: "48px",
borderRadius: "12px",
}),

menu: (base) => ({
...base,
backgroundColor: "#0f0f13",
borderRadius: "12px",
border: "1px solid #2a2a2e",
}),

option: (base, state) => ({
...base,
backgroundColor: state.isSelected
? "#7c3aed"
: state.isFocused
? "#1f1f25"
: "#0f0f13",
color: state.isSelected ? "#fff" : "#e5e7eb",
padding: "12px 16px",
cursor: "pointer",
}),

singleValue: (base) => ({
...base,
color: "#ffffff",
fontWeight: 500,
}),

placeholder: (base) => ({
...base,
color: "#9ca3af",
}),

indicatorSeparator: () => ({ display: "none" }),
};

const GeneratorForm = ({
prompt,
setPrompt,
framework,
setFramework,
options,
loading,
onGenerate,
}) => {
return (
<div className="bg-[#141319]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">

  {/* Header */}
    <div>
        <h3 className="text-xl font-semibold flex items-center gap-2">
              <BsStars className="text-purple-400" />
                    AI Component Generator
                        </h3>

                            <p className="text-sm text-gray-400 mt-1">
                                  Describe your UI and let AI generate the code instantly.
                                      </p>
                                        </div>

                                          {/* Framework */}
                                            <div className="mt-6">
                                                <p className="font-medium text-sm text-gray-300 mb-1">
                                                      Framework
                                                          </p>

                                                              <Select
                                                                    options={options}
                                                                          value={framework}
                                                                                onChange={setFramework}
                                                                                      styles={selectStyles}
                                                                                          />
                                                                                            </div>

                                                                                              {/* Prompt */}
                                                                                                <div className="mt-5">
                                                                                                    <p className="font-medium text-sm text-gray-300 mb-1">
                                                                                                          Describe Component
                                                                                                              </p>

                                                                                                                  <textarea
                                                                                                                        value={prompt}
                                                                                                                              onChange={(e) => setPrompt(e.target.value)}
                                                                                                                                    placeholder="Example: Modern pricing card with hover animation and gradient background"
                                                                                                                                          className="w-full min-h-[160px] p-4 rounded-xl
                                                                                                                                                bg-zinc-900 border border-zinc-800
                                                                                                                                                      outline-none focus:ring-2 focus:ring-purple-500
                                                                                                                                                            transition"
                                                                                                                                                                />

                                                                                                                                                                    <p className="text-xs text-gray-500 mt-2">
                                                                                                                                                                          Tip: Be descriptive for better AI results.
                                                                                                                                                                              </p>
                                                                                                                                                                                </div>

                                                                                                                                                                                  {/* Generate Button */}
                                                                                                                                                                                    <button
                                                                                                                                                                                        onClick={onGenerate}
                                                                                                                                                                                            disabled={loading}
                                                                                                                                                                                                className="mt-6 w-full flex items-center justify-center gap-2
                                                                                                                                                                                                    bg-gradient-to-r from-purple-500 to-purple-700
                                                                                                                                                                                                        py-3 rounded-xl font-medium
                                                                                                                                                                                                            transition-all hover:opacity-90 active:scale-95
                                                                                                                                                                                                                disabled:opacity-60 disabled:cursor-not-allowed"
                                                                                                                                                                                                                  >
                                                                                                                                                                                                                      {loading ? (
                                                                                                                                                                                                                            <>
                                                                                                                                                                                                                                    <ClipLoader size={18} color="white" />
                                                                                                                                                                                                                                            Generating...
                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                      ) : (
                                                                                                                                                                                                                                                            <>
                                                                                                                                                                                                                                                                    <BsStars />
                                                                                                                                                                                                                                                                            Generate UI
                                                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                        export default GeneratorForm;