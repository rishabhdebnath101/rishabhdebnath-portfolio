---
name: responsive-qa-checker
description: Standard operating procedure and automated test matrix for verifying zero horizontal overflow, broken cards, clipping, or navigation flaws across 11 device viewports (320px to 1920px).
---

# Responsive QA Checker Skill

This skill defines the multi-device verification protocol to ensure every page renders with visual excellence and 0 layout defects across all screen sizes.

## 1. Required Viewport Matrix

All layouts must be tested and confirmed against the following 11 viewports:

| Device Category | Width | Height | Key Elements to Verify |
|---|---|---|---|
| **Ultra-Narrow Mobile** | `320px` | `568px` | Zero horizontal scroll (`scrollWidth <= clientWidth`), tags wrap cleanly |
| **Small Mobile** | `360px` | `640px` | Header actions, hamburger toggle, card padding |
| **Standard Mobile** | `375px` | `667px` | Typography scaling, button touch target size |
| **Modern iPhone** | `390px` | `844px` | Hero image proportions, badge alignment |
| **Modern Android** | `412px` | `915px` | Modal dialog layout, form input padding |
| **Large Mobile / Max** | `430px` | `932px` | Two-column grid transitions |
| **Tablet Portrait** | `768px` | `1024px` | Sidebar collapse, navigation bar breakpoint |
| **Tablet Landscape** | `1024px` | `768px` | Multi-column grid balance, drawer hidden |
| **Small Laptop** | `1280px` | `800px` | Maximum container bounds, margin centering |
| **Desktop Monitor** | `1440px` | `900px` | Spacing rhythm, high-DPI image sharpness |
| **Ultra-Wide Desktop** | `1920px` | `1080px` | Content centering, no full-bleed distortion |

## 2. Failure Criteria
- ❌ Any horizontal scrollbar or horizontal overflow (`overflow: visible` causing body stretch).
- ❌ Clipped text or ellipsis on important titles.
- ❌ Buttons or badges overlapping adjacent text.
- ❌ Unclickable touch targets (< 44x44px).
- ❌ Unreadable low-contrast text on dark backgrounds.

## 3. Automated PowerShell Viewport Test

```powershell
powershell -ExecutionPolicy Bypass -File "scripts/qa_responsive.ps1"
```
