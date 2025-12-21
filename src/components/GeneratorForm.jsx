import Select from "react-select";
import { BsStars } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#0f0f13",
    borderColor: state.isFocused ? "#a855f7" : "#2a2a2e",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#a855f7",
    },
    minHeight: "48px",
    borderRadius: "12px",
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#0f0f13",
    borderRadius: "12px",
    border: "1px solid #2a2a2e",
    overflow: "hidden",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#7c3aed" // selected
      : state.isFocused
      ? "#1f1f25" // hover
      : "#0f0f13", // normal
    color: state.isSelected ? "#ffffff" : "#e5e7eb",
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: "14px",
    "&:active": {
      backgroundColor: "#6d28d9",
    },
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

  input: (base) => ({
    ...base,
    color: "#ffffff",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#9ca3af",
    "&:hover": {
      color: "#ffffff",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
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
    <div className="bg-[#141319] p-6 rounded-2xl border border-white/10 shadow-xl">
      <h3 className="text-xl font-semibold">AI Component Generator</h3>

      <p className="text-sm text-gray-400 mt-2">
        Describe your UI and let AI build it 🚀
      </p>

      <p className="mt-4 font-medium">Framework</p>
      <Select
        className="mt-2"
        options={options}
        value={framework}
        onChange={setFramework}
        styles={selectStyles}
      />

      <p className="mt-4 font-medium">Describe Component</p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ex: Pricing card with hover animation"
        className="w-full min-h-[160px] mt-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        onClick={onGenerate}
        className="mt-4 w-full flex items-center justify-center gap-2
        bg-gradient-to-r from-purple-500 to-purple-700
        py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
      >
        {loading ? <ClipLoader size={18} color="white" /> : <BsStars />}
        Generate UI
      </button>
    </div>
  );
};

export default GeneratorForm;
