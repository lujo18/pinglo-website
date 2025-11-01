import React from "react";
import { XStack, ScrollView } from "tamagui";
import DynamicIcon from "./DynamicIcon";
import ButtonA from "../buttons/ButtonA";
import { icons } from "lucide-react-native";

// Curated list of PascalCase lucide icon keys
export const ICON_CHOICES: Array<{ key: keyof typeof icons; label: string }> = [
  { key: "User", label: "Person" },
  { key: "Info", label: "Basics" },
  { key: "Mail", label: "Contact" },
  { key: "Phone", label: "Phone" },
  { key: "Calendar", label: "Meeting" },
  { key: "Star", label: "Interests" },
  { key: "Briefcase", label: "Work" },
  { key: "Heart", label: "Favorites" },
  { key: "Map", label: "Location" },
  { key: "Globe", label: "Languages" },
  { key: "StickyNote", label: "Notes" },
  { key: "Camera", label: "Photos" },
];

interface IconPickerProps {
  value?: keyof typeof icons | null;
  onChange: (key: keyof typeof icons) => void;
}

export default function IconPicker({ value, onChange }: IconPickerProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} my="$2">
      <XStack gap="$2">
        {ICON_CHOICES.map((ic) => (
          <ButtonA
            key={ic.key as string}
            onPress={() => onChange(ic.key)}
            selected={value === ic.key}
            icon={<DynamicIcon icon={ic.key} />}
          >
            {ic.label}
          </ButtonA>
        ))}
      </XStack>
    </ScrollView>
  );
}
