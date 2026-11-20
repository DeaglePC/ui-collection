"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Dialog, AlertDialog, Popover, DropdownMenu, ContextMenu, Tabs, Accordion, RadioGroup, Toggle, ToggleGroup, Tooltip, Progress, Separator, ScrollArea, NavigationMenu, Form, Label } from 'radix-ui';
import { skin, material, gated } from './ui-helpers.js';
import { SwarmUI } from './ui.js';
export const SwarmInput = skin('input', 'swarm-input', true);
export const SwarmTextarea = skin('textarea', 'swarm-textarea', true);
export const SwarmLabel = skin(Label.Root, 'swarm-label');
export const SwarmCard = {
    Root: forwardRef(function SwarmCardRoot({ className, ...props }, ref) { return _jsx(SwarmUI.Part, { asChild: true, contain: true, radius: 12, children: _jsx("section", { ...props, ref: ref, className: ['swarm-card', className].filter(Boolean).join(' ') }) }); }), Header: skin('header', 'swarm-card-header'),
    Title: skin('h3', 'swarm-card-title'), Description: skin('p', 'swarm-card-description'),
    Content: skin('div', 'swarm-card-content'), Footer: skin('footer', 'swarm-card-footer'),
};
export const SwarmBadge = skin('span', 'swarm-badge', true);
export const SwarmSeparator = skin(Separator.Root, 'swarm-separator', true);
export const SwarmSkeleton = skin('div', 'swarm-skeleton');
export const SwarmDialog = { ...Dialog, Root: gated(Dialog.Root), Trigger: skin(Dialog.Trigger, 'swarm-button', true), Overlay: skin(Dialog.Overlay, 'swarm-overlay'), Content: material(Dialog.Content, 'swarm-dialog'), Title: skin(Dialog.Title, 'swarm-dialog-title'), Description: skin(Dialog.Description, 'swarm-description'), Close: skin(Dialog.Close, 'swarm-button', true) };
export const SwarmAlertDialog = { ...AlertDialog, Root: gated(AlertDialog.Root), Trigger: skin(AlertDialog.Trigger, 'swarm-button', true), Overlay: skin(AlertDialog.Overlay, 'swarm-overlay'), Content: material(AlertDialog.Content, 'swarm-dialog'), Title: skin(AlertDialog.Title, 'swarm-dialog-title'), Description: skin(AlertDialog.Description, 'swarm-description'), Action: skin(AlertDialog.Action, 'swarm-button', true), Cancel: skin(AlertDialog.Cancel, 'swarm-button', true) };
export const SwarmPopover = { ...Popover, Root: gated(Popover.Root), Trigger: skin(Popover.Trigger, 'swarm-button', true), Content: material(Popover.Content, 'swarm-popover'), Close: skin(Popover.Close, 'swarm-button') };
export const SwarmDropdownMenu = { ...DropdownMenu, Root: gated(DropdownMenu.Root), Trigger: skin(DropdownMenu.Trigger, 'swarm-button', true), Content: material(DropdownMenu.Content, 'swarm-menu'), SubContent: material(DropdownMenu.SubContent, 'swarm-menu'), Item: skin(DropdownMenu.Item, 'swarm-menu-item'), CheckboxItem: skin(DropdownMenu.CheckboxItem, 'swarm-menu-item'), RadioItem: skin(DropdownMenu.RadioItem, 'swarm-menu-item'), SubTrigger: skin(DropdownMenu.SubTrigger, 'swarm-menu-item'), Label: skin(DropdownMenu.Label, 'swarm-menu-label'), Separator: skin(DropdownMenu.Separator, 'swarm-separator') };
export const SwarmContextMenu = { ...ContextMenu, Content: material(ContextMenu.Content, 'swarm-menu'), Item: skin(ContextMenu.Item, 'swarm-menu-item'), Separator: skin(ContextMenu.Separator, 'swarm-separator') };
export const SwarmTabs = { ...Tabs, List: skin(Tabs.List, 'swarm-tabs-list'), Trigger: skin(Tabs.Trigger, 'swarm-tabs-trigger', true), Content: skin(Tabs.Content, 'swarm-tabs-content') };
export const SwarmAccordion = { ...Accordion, Item: skin(Accordion.Item, 'swarm-accordion-item'), Header: skin(Accordion.Header, 'swarm-accordion-header'), Trigger: skin(Accordion.Trigger, 'swarm-accordion-trigger', true), Content: skin(Accordion.Content, 'swarm-accordion-content') };
export const SwarmRadioGroup = { ...RadioGroup, Root: skin(RadioGroup.Root, 'swarm-radio-group'), Item: skin(RadioGroup.Item, 'swarm-radio', true), Indicator: skin(RadioGroup.Indicator, 'swarm-radio-indicator') };
export const SwarmToggle = skin(Toggle.Root, 'swarm-toggle', true);
export const SwarmToggleGroup = { ...ToggleGroup, Root: skin(ToggleGroup.Root, 'swarm-toggle-group'), Item: skin(ToggleGroup.Item, 'swarm-toggle', true) };
export const SwarmTooltip = { ...Tooltip, Root: gated(Tooltip.Root), Content: skin(Tooltip.Content, 'swarm-tooltip') };
export const SwarmProgress = { ...Progress, Root: skin(Progress.Root, 'swarm-progress', true), Indicator: skin(Progress.Indicator, 'swarm-progress-indicator') };
export const SwarmScrollArea = { ...ScrollArea, Root: skin(ScrollArea.Root, 'swarm-scroll-area'), Viewport: skin(ScrollArea.Viewport, 'swarm-scroll-viewport'), Scrollbar: skin(ScrollArea.Scrollbar, 'swarm-scrollbar'), Thumb: skin(ScrollArea.Thumb, 'swarm-scroll-thumb') };
export { SwarmToast } from "./ui-toast.js";
export const SwarmNavigationMenu = { ...NavigationMenu, List: skin(NavigationMenu.List, 'swarm-nav-list'), Trigger: skin(NavigationMenu.Trigger, 'swarm-button', true), Link: skin(NavigationMenu.Link, 'swarm-nav-link', true), Content: skin(NavigationMenu.Content, 'swarm-nav-content') };
export const SwarmForm = { ...Form, Root: skin(Form.Root, 'swarm-form'), Field: skin(Form.Field, 'swarm-field'), Label: skin(Form.Label, 'swarm-label'), Message: skin(Form.Message, 'swarm-field-message') };
export const SwarmTable = { Root: skin('table', 'swarm-table'), Header: skin('thead', 'swarm-table-head'), Body: skin('tbody', 'swarm-table-body'), Row: skin('tr', 'swarm-table-row'), Head: skin('th', 'swarm-table-heading'), Cell: skin('td', 'swarm-table-cell'), Caption: skin('caption', 'swarm-table-caption') };
