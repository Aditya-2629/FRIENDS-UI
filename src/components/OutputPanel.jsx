import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import EditorPanel from "./EditorPanel";
import PreviewPanel from "./PreviewPanel";
import { toast } from "react-toastify";

const OutputPanel = ({ code }) => {
  const [tab, setTab] = useState("code");
  const [refreshKey, setRefreshKey] = useState(0);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    toast.success("Code copied");
  };

  return (
    <div className="bg-[#141319] rounded-2xl overflow-hidden border border-white/10">
      <div className="flex gap-2 p-2 bg-[#17171c]">
        <button
          onClick={() => setTab("code")}
          className={`flex-1 py-2 rounded-lg ${
            tab === "code" ? "bg-purple-600" : "bg-zinc-800"
          }`}
        >
          Code
        </button>
        <button
          onClick={() => setTab("preview")}
          className={`flex-1 py-2 rounded-lg ${
            tab === "preview" ? "bg-purple-600" : "bg-zinc-800"
          }`}
        >
          Preview
        </button>
      </div>

      <div className="flex justify-between p-2 bg-[#17171c]">
        <p className="text-sm text-gray-400">Output</p>
        <div className="flex gap-2">
          {tab === "code" ? (
            <button onClick={copyCode}>
              <IoCopy />
            </button>
          ) : (
            <button onClick={() => setRefreshKey((p) => p + 1)}>
              <FiRefreshCcw />
            </button>
          )}
        </div>
      </div>

      <div className="h-[70vh]">
        {tab === "code" ? (
          <EditorPanel code={code} />
        ) : (
          <PreviewPanel code={code} refreshKey={refreshKey} />
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
