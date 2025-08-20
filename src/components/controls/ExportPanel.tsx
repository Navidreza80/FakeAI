"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toPng } from "html-to-image";
import { Download, Image as ImageIcon, Share2 } from "lucide-react";

export function ExportPanel({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
}) {
  const handleDownload = async () => {
    if (!targetRef.current) return;
    try {
      const dataUrl = await toPng(targetRef.current, {
        cacheBust: true,
        quality: 1,
        backgroundColor: "#212121",
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "chat-snapshot.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };
  return (
    <Card className="bg-white/5 backdrop-blur border border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-200">
          <ImageIcon className="w-5 h-5" />
          Export Options
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={handleDownload}
          variant="outline"
          className="flex-1 border-white/10 text-gray-200 hover:bg-white/10 cursor-pointer"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90">
          <Share2 className="w-4 h-4 mr-2" />
          Share Screenshot
        </Button>
      </CardContent>
    </Card>
  );
}
