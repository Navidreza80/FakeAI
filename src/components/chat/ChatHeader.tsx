import { Bot } from "lucide-react";

export function ChatHeader({ model }: { model: string }) {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 py-3 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-100">AI Assistant</h3>
          <p className="text-xs text-gray-400">{model} · Online</p>
        </div>
      </div>
      <span className="text-xs text-gray-500">Today · 12:30</span>
    </div>
  );
}
