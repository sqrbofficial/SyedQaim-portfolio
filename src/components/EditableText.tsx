import { useState } from "react";
import { useOwner } from "@/contexts/OwnerContext";

interface EditableTextProps {
  section: string;
  field: string;
  children: React.ReactNode;
  className?: string;
  multiline?: boolean;
}

const EditableText = ({ section, field, children, className = "", multiline = false }: EditableTextProps) => {
  const { isOwnerMode, updateContent, getContent } = useOwner();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const startEditing = () => {
    if (!isOwnerMode) return;
    setEditValue(getContent(section, field) || (typeof children === 'string' ? children : ''));
    setIsEditing(true);
  };

  const saveEdit = () => {
    updateContent(section, field, editValue);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  if (!isOwnerMode) {
    return <div className={className}>{children}</div>;
  }

  if (isEditing) {
    return (
      <div className={`${className} relative`}>
        {multiline ? (
          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={saveEdit}
            className="w-full bg-background border border-primary/30 rounded px-2 py-1 text-inherit font-inherit resize-none"
            rows={3}
            autoFocus
          />
        ) : (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={saveEdit}
            className="w-full bg-background border border-primary/30 rounded px-2 py-1 text-inherit font-inherit"
            autoFocus
          />
        )}
      </div>
    );
  }

  const displayText = getContent(section, field) || children;

  return (
    <div 
      className={`${className} cursor-pointer hover:bg-primary/10 hover:outline hover:outline-1 hover:outline-primary/30 rounded transition-all duration-200 ${isOwnerMode ? 'border-2 border-dashed border-transparent hover:border-primary/30' : ''}`}
      onClick={startEditing}
      title={isOwnerMode ? "Click to edit" : undefined}
    >
      {displayText}
    </div>
  );
};

export default EditableText;