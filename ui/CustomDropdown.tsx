import { Check, Filter } from "lucide-react-native";
import React from "react";
import { Adapt, Select, SelectProps, Sheet, useTheme } from "tamagui";

interface DropdownItem {
  label: string;
  value: string;
}

interface CustomDropdownProps extends SelectProps {
  items: DropdownItem[];
  placeholder?: string;
  label?: string;
  trigger?: React.ReactNode;
  width?: number;
  icon?: React.ReactNode;
}

export function CustomDropdown({
  items,
  placeholder = "Select an option",
  label,
  trigger,
  width = 200,
  icon,
  ...props
}: CustomDropdownProps) {

  const theme = useTheme()
 
  return (
    <Select native disablePreventBodyScroll {...props}>
      {trigger || (
        <Select.Trigger width={20} justify={"center"}  gap={"$2"}>
          
          {/* <Select.Value placeholder={placeholder} /> */}
          <Filter color={theme.color.val} size={18}/>
        </Select.Trigger>
      )}

      <Adapt platform="touch">
        <Sheet native modal dismissOnSnapToBottom animation="medium">
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            bg="$shadowColor"
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.Viewport style={{ minWidth: 200 }}>
          
          <Select.Group>
            
            {React.useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item index={i} gap={"$2"} key={item.value} value={item.value}>
                      <Select.ItemIndicator>
                        <Check size={16} color={theme.color.val} />
                      </Select.ItemIndicator>
                      <Select.ItemText flex={1}>{item.label}</Select.ItemText>
                      
                    </Select.Item>
                  );
                }),
              [items, theme.color.val]
            )}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
}
