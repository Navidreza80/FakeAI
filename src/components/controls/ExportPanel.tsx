"use client";

import { Image as ImageIcon, Download, Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ExportPanel() {
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
          variant="outline"
          className="flex-1 border-white/10 text-gray-200 hover:bg-white/10"
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
