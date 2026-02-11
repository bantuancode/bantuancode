"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaUndo,
  FaRedo,
  FaImage,
  FaLink,
  FaTerminal,
} from "react-icons/fa";

// Create lowlight instance
const lowlight = createLowlight(common);

type RichTextEditorProps = {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
};

// ← FIX: Define MenuButton component BEFORE RichTextEditor
const MenuButton = ({
  onClick,
  isActive = false,
  icon: Icon,
  title,
}: {
  onClick: () => void;
  isActive?: boolean;
  icon: React.ComponentType<{ className?: string }>; // ← FIX: Proper type
  title: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-2 rounded transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-400 hover:bg-slate-700 hover:text-white"
    }`}
    title={title}
  >
    <Icon className="w-4 h-4" />
  </button>
);

export function RichTextEditor({
  content,
  onChange,
  placeholder,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false, // ← ADD THIS
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-400 underline hover:text-blue-300",
        },
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write your content here...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: [
          "prose prose-invert prose-slate max-w-none",
          "focus:outline-none min-h-[400px] px-4 py-4",
          // Headings
          "prose-headings:text-white prose-headings:font-bold",
          "prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
          // Paragraphs
          "prose-p:text-slate-300 prose-p:leading-relaxed",
          // Links
          "prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300",
          // Bold & Italic
          "prose-strong:text-white prose-em:text-slate-200",
          // Lists
          "prose-ul:text-slate-300 prose-ol:text-slate-300",
          "prose-li:marker:text-blue-400",
          // Blockquote
          "prose-blockquote:border-l-blue-500 prose-blockquote:text-slate-400",
          // Code inline
          "prose-code:text-cyan-400 prose-code:bg-slate-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none",
          // Code block
          "prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl",
          // Images
          "prose-img:rounded-lg prose-img:border prose-img:border-slate-700",
          // HR
          "prose-hr:border-slate-700",
        ].join(" "),
      },
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-700 bg-slate-750">
        {/* Text Formatting */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          icon={FaBold}
          title="Bold (Ctrl+B)"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          icon={FaItalic}
          title="Italic (Ctrl+I)"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          icon={FaStrikethrough}
          title="Strikethrough"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          icon={FaCode}
          title="Inline Code"
        />
        {/* ← ADD: Code Block button */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
          icon={FaTerminal}
          title="Code Block (Ctrl+Alt+C)"
        />

        <div className="w-px h-6 bg-slate-700 mx-1" />

        {/* Headings */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-600 text-white"
              : "text-slate-400 hover:bg-slate-700 hover:text-white"
          }`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-600 text-white"
              : "text-slate-400 hover:bg-slate-700 hover:text-white"
          }`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
            editor.isActive("heading", { level: 3 })
              ? "bg-blue-600 text-white"
              : "text-slate-400 hover:bg-slate-700 hover:text-white"
          }`}
          title="Heading 3"
        >
          H3
        </button>

        <div className="w-px h-6 bg-slate-700 mx-1" />

        {/* Lists */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          icon={FaListUl}
          title="Bullet List"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          icon={FaListOl}
          title="Ordered List"
        />
        <MenuButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          icon={FaQuoteLeft}
          title="Quote"
        />

        <div className="w-px h-6 bg-slate-700 mx-1" />

        {/* Media */}
        <MenuButton onClick={addImage} icon={FaImage} title="Insert Image" />
        <MenuButton onClick={setLink} icon={FaLink} title="Insert Link" />

        <div className="w-px h-6 bg-slate-700 mx-1" />

        {/* Undo/Redo */}
        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          icon={FaUndo}
          title="Undo"
        />
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          icon={FaRedo}
          title="Redo"
        />
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="bg-slate-800" />
    </div>
  );
}
