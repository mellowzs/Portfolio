import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Modern dropdown component with FormControl-like structure
 * @param {Object} props - Component props
 * @param {Array} props.options - Array of options to display
 * @param {number} props.value - Currently selected index
 * @param {Function} props.onChange - Callback when selection changes
 * @param {Function} props.getOptionLabel - Function to get label from option
 * @param {string} props.label - Label for the dropdown
 * @param {string} props.ariaLabel - ARIA label for accessibility
 */
function ModernDropdown({ options, value, onChange, getOptionLabel, label, ariaLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (index) => {
    onChange(index);
    setIsOpen(false);
  };

  const selectedLabel = getOptionLabel ? getOptionLabel(options[value]) : options[value];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* FormControl-like structure */}
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-white/80">{label}</label>
        )}
        
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 rounded-lg bg-primary border-2 border-tertiary/60 text-tertiary font-medium text-base focus:outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all duration-200 flex items-center justify-between hover:border-tertiary/80 hover:bg-primary/90"
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="truncate text-left">{selectedLabel}</span>
          <ChevronDown
            className={`w-5 h-5 text-tertiary transition-transform duration-200 flex-shrink-0 ml-2 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-primary border-2 border-tertiary/60 rounded-lg shadow-xl shadow-tertiary/10 overflow-hidden animate-fadeIn">
            <ul
              role="listbox"
              className="max-h-60 overflow-auto modern-dropdown-menu"
              aria-label={ariaLabel}
            >
              {options.map((option, index) => {
                const optionLabel = getOptionLabel ? getOptionLabel(option) : option;
                const isSelected = index === value;

                return (
                  <li
                    key={index}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelect(index);
                      }
                    }}
                    className={`px-4 py-3 cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? "bg-[#1a7f5a24] text-tertiary font-medium"
                        : "text-white/70 hover:text-white hover:bg-[#1a7f5a12]"
                    } ${index === 0 ? "rounded-t-lg" : ""} ${
                      index === options.length - 1 ? "rounded-b-lg" : ""
                    }`}
                    tabIndex={0}
                  >
                    <div className="flex items-center justify-between">
                      <span>{optionLabel}</span>
                      {isSelected && (
                        <span className="text-tertiary ml-2">✓</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModernDropdown;

