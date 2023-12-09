/*
 *  The TOAD JavaScript/TypeScript GUI Library
 *  Copyright (C) 2018-2023 Mark-André Hopf <mhopf@mark13.org>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import type * as CSS from "csstype"

export namespace JSX {
    type SVGPreserveAspectRatioAlign =
        | "none"
        | "xMinYMin"
        | "xMidYMin"
        | "xMaxYMin"
        | "xMinYMid"
        | "xMidYMid"
        | "xMaxYMid"
        | "xMinYMax"
        | "xMidYMax"
        | "xMaxYMax"
    type SVGPreserveAspectRatioMeetOrSlice = " meet" | " slice" | ""
    type SVGPreserveAspectRatio = `${SVGPreserveAspectRatioAlign}${SVGPreserveAspectRatioMeetOrSlice}`

    export interface SVGProps extends HTMLElementProps {
        viewBox?: string
        width?: string | number
        height?: string | number
        preserveAspectRatio?: SVGPreserveAspectRatio
        transform?: string
    }

    interface ToadProps {
        set?: Reference<any> // FIXME: we might be able to specify the exact type here
    }

    // use csstype's nice CSS definitons and comments for VSCode's Intellisense
    export interface CSSProperties extends CSS.Properties<string | number> {}

    // copy'n pasted Aria definitions from DefinitelyTyped/types/react/index.d.ts

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        "aria-activedescendant"?: string
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        "aria-atomic"?: boolean | "false" | "true"
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        "aria-autocomplete"?: "none" | "inline" | "list" | "both"
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        "aria-busy"?: boolean | "false" | "true"
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        "aria-checked"?: boolean | "false" | "mixed" | "true"
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        "aria-colcount"?: number
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        "aria-colindex"?: number
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        "aria-colspan"?: number
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        "aria-controls"?: string
        /** Indicates the element that represents the current item within a container or set of related elements. */
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        "aria-describedby"?: string
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        "aria-details"?: string
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        "aria-disabled"?: boolean | "false" | "true"
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup"
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        "aria-errormessage"?: string
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        "aria-expanded"?: boolean | "false" | "true"
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        "aria-flowto"?: string
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        "aria-grabbed"?: boolean | "false" | "true"
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        "aria-hidden"?: boolean | "false" | "true"
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling"
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        "aria-keyshortcuts"?: string
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        "aria-label"?: string
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        "aria-labelledby"?: string
        /** Defines the hierarchical level of an element within a structure. */
        "aria-level"?: number
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        "aria-live"?: "off" | "assertive" | "polite"
        /** Indicates whether an element is modal when displayed. */
        "aria-modal"?: boolean | "false" | "true"
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        "aria-multiline"?: boolean | "false" | "true"
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        "aria-multiselectable"?: boolean | "false" | "true"
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        "aria-orientation"?: "horizontal" | "vertical"
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        "aria-owns"?: string
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        "aria-placeholder"?: string
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        "aria-posinset"?: number
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        "aria-pressed"?: boolean | "false" | "mixed" | "true"
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        "aria-readonly"?: boolean | "false" | "true"
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        "aria-relevant"?:
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals"
        /** Indicates that user input is required on the element before a form may be submitted. */
        "aria-required"?: boolean | "false" | "true"
        /** Defines a human-readable, author-localized description for the role of an element. */
        "aria-roledescription"?: string
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        "aria-rowcount"?: number
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        "aria-rowindex"?: number
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        "aria-rowspan"?: number
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        "aria-selected"?: boolean | "false" | "true"
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        "aria-setsize"?: number
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        "aria-sort"?: "none" | "ascending" | "descending" | "other"
        /** Defines the maximum allowed value for a range widget. */
        "aria-valuemax"?: number
        /** Defines the minimum allowed value for a range widget. */
        "aria-valuemin"?: number
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        "aria-valuenow"?: number
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        "aria-valuetext"?: string
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        | "columnheader"
        | "combobox"
        | "complementary"
        | "contentinfo"
        | "definition"
        | "dialog"
        | "directory"
        | "document"
        | "feed"
        | "figure"
        | "form"
        | "grid"
        | "gridcell"
        | "group"
        | "heading"
        | "img"
        | "link"
        | "list"
        | "listbox"
        | "listitem"
        | "log"
        | "main"
        | "marquee"
        | "math"
        | "menu"
        | "menubar"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "navigation"
        | "none"
        | "note"
        | "option"
        | "presentation"
        | "progressbar"
        | "radio"
        | "radiogroup"
        | "region"
        | "row"
        | "rowgroup"
        | "rowheader"
        | "scrollbar"
        | "search"
        | "searchbox"
        | "separator"
        | "slider"
        | "spinbutton"
        | "status"
        | "switch"
        | "tab"
        | "table"
        | "tablist"
        | "tabpanel"
        | "term"
        | "textbox"
        | "timer"
        | "toolbar"
        | "tooltip"
        | "tree"
        | "treegrid"
        | "treeitem"
        | (string & {})

    type HTMLAttributeReferrerPolicy =
        | ""
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url"

    // 4.9 Element
    interface ElementProps extends ToadProps {
        id?: string
        class?: string
        // classList
        slot?: string

        // dataset
    }

    //
    // interface GlobalEventHandlerProps
    // this was created by taking TypeScript's interface GlobalEventHandlers from lib.dom.d.ts
    // and pipe through sed 's/ | null//;s/:/?:/'
    //
    // Copyright (c) Microsoft Corporation. All rights reserved.
    // Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    // this file except in compliance with the License. You may obtain a copy of the
    // License at http://www.apache.org/licenses/LICENSE-2.0
    //
    // THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    // KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    // WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    // MERCHANTABLITY OR NON-INFRINGEMENT.
    //
    // See the Apache Version 2.0 License for specific language governing permissions
    // and limitations under the License.
    //
    interface GlobalEventHandlerProps {
        /**
         * Fires when the user aborts the download.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
         */
        onabort?: (this: GlobalEventHandlers, ev: UIEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationcancel_event) */
        onanimationcancel?: (this: GlobalEventHandlers, ev: AnimationEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationend_event) */
        onanimationend?: (this: GlobalEventHandlers, ev: AnimationEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationiteration_event) */
        onanimationiteration?: (this: GlobalEventHandlers, ev: AnimationEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationstart_event) */
        onanimationstart?: (this: GlobalEventHandlers, ev: AnimationEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/auxclick_event) */
        onauxclick?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/beforeinput_event) */
        onbeforeinput?: (this: GlobalEventHandlers, ev: InputEvent) => any
        /**
         * Fires when the object loses the input focus.
         * @param ev The focus event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/blur_event)
         */
        onblur?: (this: GlobalEventHandlers, ev: FocusEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event) */
        oncancel?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when playback is possible, but would require further buffering.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
         */
        oncanplay?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event) */
        oncanplaythrough?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when the contents of the object or selection have changed.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
         */
        onchange?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when the user clicks the left mouse button on the object
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/click_event)
         */
        onclick?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event) */
        onclose?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when the user clicks the right mouse button in the client area, opening the context menu.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
         */
        oncontextmenu?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/copy_event) */
        oncopy?: (this: GlobalEventHandlers, ev: ClipboardEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event) */
        oncuechange?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/cut_event) */
        oncut?: (this: GlobalEventHandlers, ev: ClipboardEvent) => any
        /**
         * Fires when the user double-clicks the object.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
         */
        ondblclick?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /**
         * Fires on the source object continuously during a drag operation.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
         */
        ondrag?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /**
         * Fires on the source object when the user releases the mouse at the close of a drag operation.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
         */
        ondragend?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /**
         * Fires on the target element when the user drags the object to a valid drop target.
         * @param ev The drag event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
         */
        ondragenter?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /**
         * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
         * @param ev The drag event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
         */
        ondragleave?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /**
         * Fires on the target element continuously while the user drags the object over a valid drop target.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
         */
        ondragover?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /**
         * Fires on the source object when the user starts to drag a text selection or selected object.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
         */
        ondragstart?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event) */
        ondrop?: (this: GlobalEventHandlers, ev: DragEvent) => any
        /**
         * Occurs when the duration attribute is updated.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
         */
        ondurationchange?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the media element is reset to its initial state.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
         */
        onemptied?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the end of playback is reached.
         * @param ev The event
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
         */
        onended?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when an error occurs during object loading.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/error_event)
         */
        onerror?: OnErrorEventHandler
        /**
         * Fires when the object receives focus.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/focus_event)
         */
        onfocus?: (this: GlobalEventHandlers, ev: FocusEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event) */
        onformdata?: (this: GlobalEventHandlers, ev: FormDataEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event) */
        ongotpointercapture?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLElement/input_event) */
        oninput?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event) */
        oninvalid?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when the user presses a key.
         * @param ev The keyboard event
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/keydown_event)
         */
        onkeydown?: (this: GlobalEventHandlers, ev: KeyboardEvent) => any
        /**
         * Fires when the user presses an alphanumeric key.
         * @param ev The event.
         * @deprecated
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/keypress_event)
         */
        onkeypress?: (this: GlobalEventHandlers, ev: KeyboardEvent) => any
        /**
         * Fires when the user releases a key.
         * @param ev The keyboard event
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/keyup_event)
         */
        onkeyup?: (this: GlobalEventHandlers, ev: KeyboardEvent) => any
        /**
         * Fires immediately after the browser loads the object.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
         */
        onload?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when media data is loaded at the current playback position.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
         */
        onloadeddata?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the duration and dimensions of the media have been determined.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
         */
        onloadedmetadata?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when Internet Explorer begins looking for media data.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
         */
        onloadstart?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Document/lostpointercapture_event) */
        onlostpointercapture?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /**
         * Fires when the user clicks the object with either mouse button.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
         */
        onmousedown?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mouseenter_event) */
        onmouseenter?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mouseleave_event) */
        onmouseleave?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /**
         * Fires when the user moves the mouse over the object.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
         */
        onmousemove?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /**
         * Fires when the user moves the mouse pointer outside the boundaries of the object.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
         */
        onmouseout?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /**
         * Fires when the user moves the mouse pointer into the object.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
         */
        onmouseover?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /**
         * Fires when the user releases a mouse button while the mouse is over the object.
         * @param ev The mouse event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
         */
        onmouseup?: (this: GlobalEventHandlers, ev: MouseEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/paste_event) */
        onpaste?: (this: GlobalEventHandlers, ev: ClipboardEvent) => any
        /**
         * Occurs when playback is paused.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
         */
        onpause?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the play method is requested.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
         */
        onplay?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the audio or video has started playing.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
         */
        onplaying?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointercancel_event) */
        onpointercancel?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointerdown_event) */
        onpointerdown?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointerenter_event) */
        onpointerenter?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointerleave_event) */
        onpointerleave?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointermove_event) */
        onpointermove?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointerout_event) */
        onpointerout?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointerover_event) */
        onpointerover?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/pointerup_event) */
        onpointerup?: (this: GlobalEventHandlers, ev: PointerEvent) => any
        /**
         * Occurs to indicate progress while downloading media data.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
         */
        onprogress?: (this: GlobalEventHandlers, ev: ProgressEvent) => any
        /**
         * Occurs when the playback rate is increased or decreased.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
         */
        onratechange?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when the user resets a form.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
         */
        onreset?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event) */
        onresize?: (this: GlobalEventHandlers, ev: UIEvent) => any
        /**
         * Fires when the user repositions the scroll box in the scroll bar on the object.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Document/scroll_event)
         */
        onscroll?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event) */
        onsecuritypolicyviolation?: (this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any
        /**
         * Occurs when the seek operation ends.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
         */
        onseeked?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the current playback position is moved.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
         */
        onseeking?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Fires when the current selection changes.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
         */
        onselect?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Document/selectionchange_event) */
        onselectionchange?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Node/selectstart_event) */
        onselectstart?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event) */
        onslotchange?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when the download has stopped.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
         */
        onstalled?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event) */
        onsubmit?: (this: GlobalEventHandlers, ev: SubmitEvent) => any
        /**
         * Occurs if the load operation has been intentionally halted.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
         */
        onsuspend?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs to indicate the current playback position.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
         */
        ontimeupdate?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event) */
        ontoggle?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/touchcancel_event) */
        ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | undefined
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/touchend_event) */
        ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | undefined
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/touchmove_event) */
        ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | undefined
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/touchstart_event) */
        ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | undefined
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event) */
        ontransitioncancel?: (this: GlobalEventHandlers, ev: TransitionEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/transitionend_event) */
        ontransitionend?: (this: GlobalEventHandlers, ev: TransitionEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/transitionrun_event) */
        ontransitionrun?: (this: GlobalEventHandlers, ev: TransitionEvent) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/transitionstart_event) */
        ontransitionstart?: (this: GlobalEventHandlers, ev: TransitionEvent) => any
        /**
         * Occurs when the volume is changed, or playback is muted or unmuted.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
         */
        onvolumechange?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * Occurs when playback stops because the next frame of a video resource is not available.
         * @param ev The event.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
         */
        onwaiting?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * @deprecated This is a legacy alias of `onanimationend`.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationend_event)
         */
        onwebkitanimationend?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * @deprecated This is a legacy alias of `onanimationiteration`.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
         */
        onwebkitanimationiteration?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * @deprecated This is a legacy alias of `onanimationstart`.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
         */
        onwebkitanimationstart?: (this: GlobalEventHandlers, ev: Event) => any
        /**
         * @deprecated This is a legacy alias of `ontransitionend`.
         *
         * [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
         */
        onwebkittransitionend?: (this: GlobalEventHandlers, ev: Event) => any
        /** [MDN Reference](https?://developer.mozilla.org/docs/Web/API/Element/wheel_event) */
        onwheel?: (this: GlobalEventHandlers, ev: WheelEvent) => any
    }

    // 3.2.2 Elements in the DOM
    export interface HTMLElementProps extends ElementProps, GlobalEventHandlerProps, AriaAttributes {
        // metadata attributes
        title?: string
        lang?: string
        translate?: boolean
        dir?: string

        // user interaction
        hidden?: boolean
        accessKey?: string
        accessKeyLabel?: string
        draggable?: boolean
        spellcheck?: boolean
        autocapitalize?: string

        // FIXME: 3.2.6 Global Attributes missing
        autofocus?: boolean
        contentEditable?: boolean | "inherit"
        enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send"
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"
        is?: string
        itemID?: string
        itemRef?: string
        itemScope?: string
        itemtype?: string
        // nonce
        style?: CSSProperties
        tabIndex?: number

        // WAI-ARIA
        role?: AriaRole

        // RDFa Attributes
        about?: string
        datatype?: string
        inlist?: any
        prefix?: string
        property?: string
        resource?: string
        typeof?: string
        vocab?: string
    }

    interface HTMLBaseElementProps extends HTMLElementProps {
        href?: string
        target?: string
    }

    interface HTMLLinkElementProps extends HTMLElementProps {
        href?: string
        crossOrigin?: string
        rel?: string
        as?: string
        // relList
        media?: string
        integrity?: string
        hreflang?: string
        type?: string
        // sizes
        imageSrcset?: string
        imageSizes?: string
        referrerPolicy?: HTMLAttributeReferrerPolicy
        disabled?: boolean
    }

    interface HTMLMetaElementProps extends HTMLElementProps {
        name?: string
        // http-equiv
        httpEquiv?:
            | "content-languagle"
            | "content-type"
            | "default-style"
            | "refresh"
            | "set-cookie"
            | "x-ua-compatible"
            | "content-security-policy"
        content?: string
        charset?: string // not part of the DOM?
    }

    interface HTMLStyleElementProps extends HTMLElementProps {
        media?: string
        // sheet from the LinkStyle interface?
    }

    interface HTMLOListElementProps extends HTMLElementProps {
        reversed?: boolean
        start?: number
        type?: "1" | "a" | "A" | "i" | "I"
    }

    interface HTMLLIElementProps extends HTMLElementProps {
        value?: number
    }

    interface HTMLAnchorElementProps extends HTMLElementProps {
        href?: string
        target?: string
        download?: string // any?
        ping?: string
        rel?: string
        hrefLang?: string
        type?: string
        text?: string
        referrerPolicy?: HTMLAttributeReferrerPolicy
    }

    interface HTMLQuoteElementProps extends HTMLElementProps {
        quote?: string
    }

    interface HTMLDataElementProps extends HTMLElementProps {
        value?: string
    }

    interface HTMLTimeElementProps extends HTMLElementProps {
        dateTime?: string
    }

    interface HTMLModElementProps extends HTMLElementProps {
        cite?: string
        dateTime?: string
    }

    interface HTMLSourceElementProps extends HTMLElementProps {
        src?: string
        type?: string
        srcset?: string
        sizes?: string
        media?: string
        width?: number
        height?: number
    }

    interface HTMLImageElementProps extends HTMLElementProps {
        alt?: string
        src?: string
        srcset?: string
        sizes?: string
        crossOrigin?: "anonymous" | "use-credentials" | ""
        useMap?: string
        isMap?: boolean
        width?: number | string
        height?: number | string
        // naturalWidth?: number
        // naturalHeight?: number
        // complete?: boolean
        // currentSrc?: string
        referrerPolicy?: HTMLAttributeReferrerPolicy
        decoding?: "async" | "auto" | "sync"
        loading?: "lazy" | "eager"
    }

    interface HTMLIFrameElementProps extends HTMLElementProps {
        src?: string
        srcdoc?: string
        name?: string
        // sandbox
        allow?: string
        allowFullscreen?: boolean
        width?: string
        height?: string
        referrerPolicy?: HTMLAttributeReferrerPolicy
        loading?: string
    }

    interface HTMLEmbedElementProps extends HTMLElementProps {
        src?: string
        type?: string
        width?: string
        height?: string
    }

    interface HTMLObjectElementProps extends HTMLElementProps {
        data?: string
        type?: string
        name?: string
        // form
        width?: string
        height?: string
    }

    interface HTMLParamElementProps extends HTMLElementProps {
        name?: string
        value?: string
    }

    interface HTMLMediaElementProps extends HTMLElementProps {
        src?: string
        // srcObject
        crossOrigin?: string
        preload?: string
        currentTime?: number
        autoplay?: boolean
        loop?: boolean
        volume?: number
        muted?: boolean
    }

    interface HTMLVideoElementProps extends HTMLMediaElementProps {
        width?: number
        height?: number
        poster?: string
        playsInline?: boolean
    }

    interface HTMLTrackElementProps extends HTMLElementProps {
        kind?: string
        src?: string
        srclang?: string
        label?: string
        default?: boolean
    }

    interface HTMLMapElementProps extends HTMLElementProps {
        name?: string
    }

    interface HTMLAreaElementProps extends HTMLElementProps {
        alt?: string
        coords?: string
        shape?: string
        target?: string
        download?: string
        ping?: string
        rel?: string
        referrerPolicy?: HTMLAttributeReferrerPolicy
    }

    interface HTMLTableColElementProps extends HTMLElementProps {
        span?: number
    }

    interface HTMLTableCellElementProps extends HTMLElementProps {
        colspan?: number
        rowspan?: number
        headers?: string
        scope?: string
        abbr?: string
    }

    interface HTMLFormElementProps extends HTMLElementProps {
        acceptCharset?: string
        action?: string
        autocomplete?: string
        enctype?: string
        encoding?: string
        method?: string
        name?: string
        noValidate?: boolean
        target?: string
        rel?: string
    }

    interface HTMLLabelElementProps extends HTMLElementProps {
        htmlFor?: string
    }

    interface HTMLInputElementProps extends HTMLElementProps {
        accept?: string
        alt?: string
        autocomplete?: string
        defaultChecked?: boolean
        checked?: boolean
        dirName?: string
        disabled?: boolean // files
        formAction?: string
        formEnctype?: string
        formMethod?: string
        formTarget?: string
        height?: number
        indeterminate?: boolean
        max?: string
        maxLength?: string
        min?: string
        minLength?: string
        multiple?: boolean
        name?: string
        pattern?: string
        placeholder?: string
        readOnly?: boolean
        required?: boolean
        size?: number
        src?: string
        step?: string
        type?:
            | "button"
            | "checkbox"
            | "image"
            | "radio"
            | "color"
            | "date"
            | "datetime"
            | "datetime-local"
            | "email"
            | "file"
            | "hidden"
            | "month"
            | "number"
            | "password"
            | "range"
            | "research"
            | "search"
            | "submit"
            | "tel"
            | "text"
            | "url"
            | "week"
        defaultValue?: string
        value?: string
        // valueAsDate
        // valueAsNumber
        width?: number
        // stepUp
        // stepDown
        // selectionStart
        // selectionEnd
        // selectionDirection
    }

    interface HTMLOptGroupElementProps extends HTMLElementProps {
        disabled?: boolean
        label?: string
    }

    interface HTMLOptionElementProps extends HTMLElementProps {
        disabled?: boolean
        label?: string
        defaultSelected?: boolean
        selected?: boolean
        value?: string
        text?: string
    }

    interface HTMLTextAreaElementProps extends HTMLElementProps {
        autocomplete?: string
        cols?: number
        dirName?: string
        disabled?: boolean
        maxLength?: number
        minLength?: number
        name?: string
        placeholder?: string
        readonly?: boolean
        required?: boolean
        rows?: number
        wrap?: string
        defaultValue?: string
        value?: string
        selectionStart?: number
        selectionEnd?: number
        selectionDirection?: string
    }

    interface HTMLOutputElementProps extends HTMLElementProps {
        name?: string
        defaultValue?: string
        value?: string
        willValidate?: boolean
        // validity
        validationMessage?: string
    }

    interface HTMLProgressElementProps extends HTMLElementProps {
        value?: number
        max?: number
    }

    interface HTMLMeterElementProps extends HTMLElementProps {
        value?: number
        min?: number
        max?: number
        low?: number
        high?: number
        optimum?: number
    }

    interface HTMLFieldSetElementProps extends HTMLElementProps {
        disabled?: number
        name?: string
    }

    interface HTMLButtonElementProps extends HTMLElementProps {
        disabled?: boolean
        formAction?: string
        formEnctype?: string
        formMethod?: string
        formNoValidate?: boolean
        formTarget?: string
        name?: string
        type?: "submit" | "reset" | "button"
        value?: string
    }

    interface HTMLSelectElementProps extends HTMLElementProps {
        autocomplete?: boolean
        disabled?: boolean
        multiple?: boolean
        name?: string
        required?: boolean
        size?: number
        length?: number
        selectedIndex?: number
        value?: string
    }

    interface HTMLDetailsElementProps extends HTMLElementProps {
        open?: boolean
    }

    interface HTMLDialogElementProps extends HTMLElementProps {
        open?: boolean
        returnValue?: string
    }

    interface HTMLScriptElementProps extends HTMLElementProps {
        src?: string
        type?: string
        noModule?: boolean
        async?: boolean
        defer?: boolean
        crossOrigin?: string
        text?: string
        integrity?: string
        referrerPolicy?: HTMLAttributeReferrerPolicy
    }

    interface HTMLSlotElementProps extends HTMLElementProps {
        name?: string
    }

    interface HTMLCanvasElementProps extends HTMLElementProps {
        width?: string | number
        height?: string | number
    }

    // export type Element = Element | Fragment

    export interface IntrinsicElements {
        // 4.1 The document element

        /**
         * The html element represents the root of an HTML document.
         *
         * Authors are encouraged to specify a lang attribute on the root
         * html element, giving the document's language.  This aids speech
         * synthesis tools to determine what pronunciations to use,
         * translation tools to determine what rules to use, and so forth.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-html-element}
         */
        html: HTMLElementProps

        // 4.2 Document metadata

        /**
         * The head element represents a collection of metadata for the Document.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-head-element}
         */
        head: HTMLElementProps

        /**
         * The title element represents the document's title or name.
         * Authors should use titles that identify their documents even when
         * they are used out of context, for example in a user's history or
         * bookmarks, or in search results.  The document's title is often
         * different from its first heading, since the first heading does
         * not have to stand alone when taken out of context.
         *
         * There must be no more than one title element per document.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-title-element}
         */
        title: HTMLElementProps

        /**
         * The base element allows authors to specify the document base URL
         * for the purposes of parsing URLs, and the name of the default
         * navigable for the purposes of following hyperlinks.  The element
         * does not represent any content beyond this information.
         *
         * There must be no more than one base element per document.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-base-element}
         */
        base: HTMLBaseElementProps

        /**
         * The link element allows authors to link their document to other
         * resources.
         *
         * The address of the link(s) is given by the href attribute.  If
         *  the href attribute is present, then its value must be a valid
         *  non-empty URL potentially surrounded by spaces.  One or both of
         *  the href or imagesrcset attributes must be present.
         *
         * If both the href and imagesrcset attributes are absent, then the
         * element does not define a link.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-link-element}
         */
        link: HTMLLinkElementProps

        /**
         * The meta element represents various kinds of metadata that cannot
         * be expressed using the title, base, link, style, and script
         * elements.
         *
         * The meta element can represent document-level metadata with the
         * name attribute, pragma directives with the http-equiv attribute,
         * and the file's character encoding declaration when an HTML
         * document is serialized to string form (e.g.  for transmission
         * over the network or for disk storage) with the charset attribute.
         *
         * Exactly one of the name, http-equiv, charset, and itemprop
         * attributes must be specified.
         *
         * If either name, http-equiv, or itemprop is specified, then the
         * content attribute must also be specified.  Otherwise, it must be
         * omitted.
         *
         * The charset attribute specifies the character encoding used by
         * the document.  This is a character encoding declaration.  If the
         * attribute is present, its value must be an ASCII case-insensitive
         * match for the string "utf-8".
         *
         * There must not be more than one meta element with a charset
         * attribute per document.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element}
         */
        meta: HTMLMetaElementProps

        /**
         * The style element allows authors to embed CSS style sheets in
         * their documents.  The style element is one of several inputs to
         * the styling processing model.  The element does not represent
         * content for the user.
         *
         * With JSX, use this notation: &lt;style&gt;{&#96;...&#96;}&lt;/style&gt;
         *
         * @see {@link https://html.spec.whatwg.org/multipage/semantics.html#the-style-element}
         */
        style: HTMLStyleElementProps

        // 4.3 Sections

        /**
         * The body element represents the contents of the document.
         *
         * In conforming documents, there is only one body element.  The
         * document.body IDL attribute provides scripts with easy access to
         * a document's body element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-body-element}
         */
        body: HTMLElementProps

        /**
         * The article element represents a complete, or self-contained,
         * composition in a document, page, application, or site and that
         * is, in principle, independently distributable or reusable, e.g.
         * in syndication.  This could be a forum post, a magazine or
         * newspaper article, a blog entry, a user-submitted comment, an
         * interactive widget or gadget, or any other independent item of
         * content.
         *
         * When article elements are nested, the inner article elements
         * represent articles that are in principle related to the contents
         * of the outer article.  For instance, a blog entry on a site that
         * accepts user-submitted comments could represent the comments as
         * article elements nested within the article element for the blog
         * entry.
         *
         * Author information associated with an article element (q.v.  the
         * address element) does not apply to nested article elements.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-article-element}
         */
        article: HTMLElementProps

        /**
         * The section element represents a generic section of a document or
         * application.  A section, in this context, is a thematic grouping
         * of content, typically with a heading.
         *
         * **EXAMPLE** Examples of sections would be chapters, the various
         * tabbed pages in a tabbed dialog box, or the numbered sections of
         * a thesis.  A web site's home page could be split into sections
         * for an introduction, news items, and contact information.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-section-element}
         */
        section: HTMLElementProps

        /**
         * The nav element represents a section of a page that links to
         * other pages or to parts within the page: a section with
         * navigation links.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-nav-element}
         */
        nav: HTMLElementProps

        /**
         * The aside element represents a section of a page that consists of
         * content that is tangentially related to the content around the
         * aside element, and which could be considered separate from that
         * content.  Such sections are often represented as sidebars in
         * printed typography.
         *
         * The element can be used for typographical effects like pull
         * quotes or sidebars, for advertising, for groups of nav elements,
         * and for other content that is considered separate from the main
         * content of the page.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-aside-element}
         */
        aside: HTMLElementProps

        /**
         * These elements represent headings for their sections.
         *
         * The semantics and meaning of these elements are defined in the
         * section on headings and outlines.
         *
         * These elements have a heading level given by the number in their
         * name.  The heading level corresponds to the levels of nested
         * sections.  The h1 element is for a top-level section, h2 for a
         * subsection, h3 for a sub-subsection, and so on.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements}
         */
        h1: HTMLElementProps

        /**
         * These elements represent headings for their sections.
         *
         * The semantics and meaning of these elements are defined in the
         * section on headings and outlines.
         *
         * These elements have a heading level given by the number in their
         * name.  The heading level corresponds to the levels of nested
         * sections.  The h1 element is for a top-level section, h2 for a
         * subsection, h3 for a sub-subsection, and so on.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements}
         */
        h2: HTMLElementProps

        /**
         * These elements represent headings for their sections.
         *
         * The semantics and meaning of these elements are defined in the
         * section on headings and outlines.
         *
         * These elements have a heading level given by the number in their
         * name.  The heading level corresponds to the levels of nested
         * sections.  The h1 element is for a top-level section, h2 for a
         * subsection, h3 for a sub-subsection, and so on.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements}
         */
        h3: HTMLElementProps

        /**
         * These elements represent headings for their sections.
         *
         * The semantics and meaning of these elements are defined in the section on headings and outlines.
         *
         * These elements have a heading level given by the number in their
         * name.  The heading level corresponds to the levels of nested
         * sections.  The h1 element is for a top-level section, h2 for a
         * subsection, h3 for a sub-subsection, and so on.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements}
         */
        h4: HTMLElementProps

        /**
         * These elements represent headings for their sections.
         *
         * The semantics and meaning of these elements are defined in the
         * section on headings and outlines.
         *
         * These elements have a heading level given by the number in their
         * name.  The heading level corresponds to the levels of nested
         * sections.  The h1 element is for a top-level section, h2 for a
         * subsection, h3 for a sub-subsection, and so on.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements}
         */
        h5: HTMLElementProps

        /**
         * These elements represent headings for their sections.
         *
         * The semantics and meaning of these elements are defined in the section on headings and outlines.
         *
         * These elements have a heading level given by the number in their
         * name.  The heading level corresponds to the levels of nested
         * sections.  The h1 element is for a top-level section, h2 for a
         * subsection, h3 for a sub-subsection, and so on.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements}
         */
        h6: HTMLElementProps

        /**
         * The hgroup element represents a heading and related content.  The
         * element may be used to group an h1–h6 element with one or more p
         * elements containing content representing a subheading,
         * alternative title, or tagline.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element}
         */
        hgroup: HTMLElementProps

        /**
         * The header element represents a group of introductory or
         * navigational aids.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-header-element}
         */
        header: HTMLElementProps

        /**
         * The footer element represents a footer for its nearest ancestor
         * sectioning content element, or for the body element if there is
         * no such ancestor.  A footer typically contains information about
         * its section such as who wrote it, links to related documents,
         * copyright data, and the like.
         *
         * When the footer element contains entire sections, they represent
         * appendices, indices, long colophons, verbose license agreements,
         * and other such content.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-footer-element}
         */
        footer: HTMLElementProps

        /**
         * The address element represents the contact information for its
         * nearest article or body element ancestor.  If that is the body
         * element, then the contact information applies to the document as
         * a whole.
         *
         * The address element must not be used to represent arbitrary
         * addresses (e.g.  postal addresses), unless those addresses are in
         * fact the relevant contact information.  (The p element is the
         * appropriate element for marking up postal addresses in general.)
         *
         * The address element must not contain information other than
         * contact information.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-address-element}
         */
        address: HTMLElementProps

        // 4.4 Grouping content

        /**
         * The p element represents a paragraph.
         *
         * **NOTE** While paragraphs are usually represented in visual media
         * by blocks of text that are physically separated from adjacent
         * blocks through blank lines, a style sheet or user agent would be
         * equally justified in presenting paragraph breaks in a different
         * manner, for instance using inline pilcrows (¶).
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element}
         */
        p: HTMLElementProps

        /**
         * The hr element represents a paragraph-level thematic break, e.g.,
         * a scene change in a story, or a transition to another topic
         * within a section of a reference book; alternatively, it
         * represents a separator between a set of options of a select
         * element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element}
         */
        hr: HTMLElementProps

        /**
         * The pre element represents a block of preformatted text, in which
         * structure is represented by typographic conventions rather than
         * by elements.
         *
         * **NOTE** In the HTML syntax, a leading newline character
         * **immediately following the pre element start tag is stripped.
         *
         * Some examples of cases where the pre element could be used:
         *
         * * Including an email, with paragraphs indicated by blank lines,
         *   lists indicated by lines prefixed with a bullet, and so on.
         * * Including fragments of computer code, with structure indicated
         *   according to the conventions of that language.
         * * Displaying ASCII art.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element}
         */
        pre: HTMLElementProps

        /**
         * The blockquote element represents a section that is quoted from another source.
         *
         * Content inside a blockquote must be quoted from another source,
         * whose address, if it has one, may be cited in the cite attribute.
         *
         * If the cite attribute is present, it must be a valid URL
         * potentially surrounded by spaces.  To obtain the corresponding
         * citation link, the value of the attribute must be parsed relative
         * to the element's node document.  User agents may allow users to
         * follow such citation links, but they are primarily intended for
         * private use (e.g., by server-side scripts collecting statistics
         * about a site's use of quotations), not for readers.
         *
         * The content of a blockquote may be abbreviated or may have
         * context added in the conventional manner for the text's language.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element}
         */
        blockquote: HTMLQuoteElementProps

        /**
         * The ol element represents a list of items, where the items have
         * been intentionally ordered, such that changing the order would
         * change the meaning of the document.
         *
         * The items of the list are the li element child nodes of the ol
         * element, in tree order.
         *
         * The reversed attribute is a boolean attribute.  If present, it
         * indicates that the list is a descending list (..., 3, 2, 1).  If
         * the attribute is omitted, the list is an ascending list (1, 2, 3,
         * ...).
         *
         * The start attribute, if present, must be a valid integer.  It is
         * used to determine the starting value of the list.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element}
         */
        ol: HTMLOListElementProps

        /**
         * The ul element represents a list of items, where the order of the
         * items is not important — that is, where changing the order would
         * not materially change the meaning of the document.
         *
         * The items of the list are the li element child nodes of the ul element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element}
         */
        ul: HTMLElementProps

        /**
         * The menu element represents a toolbar consisting of its contents,
         * in the form of an unordered list of items (represented by li
         * elements), each of which represents a command that the user can
         * perform or activate.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element}
         */
        menu: HTMLElementProps

        /**
         * The li element represents a list item.  If its parent element is
         * an ol, ul, or menu element, then the element is an item of the
         * parent element's list, as defined for those elements.  Otherwise,
         * the list item has no defined list-related relationship to any
         * other li element.
         *
         * The value attribute, if present, must be a valid integer.  It is
         * used to determine the ordinal value of the list item, when the
         * li's list owner is an ol element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element}
         */
        li: HTMLLIElementProps

        /**
         * The dl element represents an association list consisting of zero
         * or more name-value groups (a description list).  A name-value
         * group consists of one or more names (dt elements, possibly as
         * children of a div element child) followed by one or more values
         * (dd elements, possibly as children of a div element child),
         * ignoring any nodes other than dt and dd element children, and dt
         * and dd elements that are children of div element children.
         * Within a single dl element, there should not be more than one dt
         * element for each name.
         *
         * Name-value groups may be terms and definitions, metadata topics
         * and values, questions and answers, or any other groups of
         * name-value data.
         *
         * The values within a group are alternatives; multiple paragraphs
         * forming part of the same value must all be given within the same
         * dd element.
         *
         * The order of the list of groups, and of the names and values
         * within each group, may be significant.
         *
         * In order to annotate groups with microdata attributes, or other
         * global attributes that apply to whole groups, or just for styling
         * purposes, each group in a dl element can be wrapped in a div
         * element.  This does not change the semantics of the dl element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element}
         */
        dl: HTMLElementProps

        /**
         * The dt element represents the term, or name, part of a
         * term-description group in a description list (dl element).
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element}
         */
        dt: HTMLElementProps

        /**
         * The dd element represents the description, definition, or value,
         * part of a term-description group in a description list (dl
         * element).
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element}
         */
        dd: HTMLElementProps

        /**
         * The figure element represents some flow content, optionally with
         * a caption, that is self-contained (like a complete sentence) and
         * is typically referenced as a single unit from the main flow of
         * the document.
         *
         * **NOTE** "Self-contained" in this context does not necessarily
         * mean independent.  For example, each sentence in a paragraph is
         * self-contained; an image that is part of a sentence would be
         * inappropriate for figure, but an entire sentence made of images
         * would be fitting.
         *
         * The element can thus be used to annotate illustrations, diagrams,
         * photos, code listings, etc.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element}
         */
        figure: HTMLElementProps

        /**
         * The figcaption element represents a caption or legend for the
         * rest of the contents of the figcaption element's parent figure
         * element, if any.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element}
         */
        figcaption: HTMLElementProps

        /**
         * The main element represents the dominant contents of the
         * document.
         *
         * A document must not have more than one main element that does not
         * have the hidden attribute specified.
         *
         * A hierarchically correct main element is one whose ancestor
         * elements are limited to html, body, div, form without an
         * accessible name, and autonomous custom elements.  Each main
         * element must be a hierarchically correct main element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element}
         */
        main: HTMLElementProps

        /**
         * The search element represents a part of a document or application
         * that contains a set of form controls or other content related to
         * performing a search or filtering operation.  This could be a
         * search of the web site or application; a way of searching or
         * filtering search results on the current web page; or a global or
         * Internet-wide search function.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element}
         */
        search: HTMLElementProps

        /**
         * The `div` element has no special meaning at all.  It represents
         * its children.
         *
         * It can be used with the `class`, `lang`, and `title` attributes
         * to mark up semantics common to a group of consecutive elements.
         *
         * It can also be used in a `dl` element, wrapping groups of `dt`
         * and `dd` elements.
         *
         * **NOTE** Authors are strongly encouraged to view the `div`
         * element as an element of last resort, for when no other element
         * is suitable.  Use of more appropriate elements instead of the
         * `div` element leads to better accessibility for readers and
         * easier maintainability for authors.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element}
         */
        div: HTMLElementProps

        // 4.5 Text-level semantics

        /**
         * If the a element has an href attribute, then it represents a
         * hyperlink (a hypertext anchor) labeled by its contents.
         *
         * If the a element has no href attribute, then the element
         * represents a placeholder for where a link might otherwise have
         * been placed, if it had been relevant, consisting of just the
         * element's contents.
         *
         * The target, download, ping, rel, hreflang, type, and
         * referrerpolicy attributes must be omitted if the href attribute
         * is not present.
         *
         * If the itemprop attribute is specified on an a element, then the
         * href attribute must also be specified.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element}
         */
        a: HTMLAnchorElementProps

        /**
         * The em element represents stress emphasis of its contents.
         *
         * The level of stress that a particular piece of content has is
         * given by its number of ancestor em elements.
         *
         * The placement of stress emphasis changes the meaning of the
         * sentence.  The element thus forms an integral part of the
         * content.  The precise way in which stress is used in this way
         * depends on the language.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element}
         */
        em: HTMLElementProps

        /**
         * The strong element represents strong importance, seriousness, or
         * urgency for its contents.
         *
         * **Importance:** the strong element can be used in a heading,
         * caption, or paragraph to distinguish the part that really matters
         * from other parts that might be more detailed, more jovial, or
         * merely boilerplate.  (This is distinct from marking up
         * subheadings, for which the hgroup element is appropriate.)
         *
         * **Example** For example, the first word of the previous paragraph
         * is marked up with strong to distinguish it from the more detailed
         * text in the rest of the paragraph.
         *
         * **Seriousness:** the strong element can be used to mark up a
         * **warning or caution notice.
         *
         * **Urgency:** the strong element can be used to denote contents
         * **that the user needs to see sooner than other parts of the
         * **document.
         *
         * The relative level of importance of a piece of content is given
         * by its number of ancestor strong elements; each strong element
         * increases the importance of its contents.
         *
         * Changing the importance of a piece of text with the strong
         * element does not change the meaning of the sentence.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element}
         */
        strong: HTMLElementProps

        /**
         * The small element represents side comments such as small print.
         *
         * **NOTE** Small print typically features disclaimers, caveats,
         * legal restrictions, or copyrights.  Small print is also sometimes
         * used for attribution, or for satisfying licensing requirements.
         *
         * **NOTE** The small element does not "de-emphasize" or lower the
         * importance of text emphasized by the em element or marked as
         * important with the strong element.  To mark text as not
         * emphasized or important, simply do not mark it up with the em or
         * strong elements respectively.
         *
         * The small element should not be used for extended spans of text,
         * such as multiple paragraphs, lists, or sections of text.  It is
         * only intended for short runs of text.  The text of a page listing
         * terms of use, for instance, would not be a suitable candidate for
         * the small element: in such a case, the text is not a side
         * comment, it is the main content of the page.
         *
         * The small element must not be used for subheadings; for that
         * purpose, use the hgroup element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element}
         */
        small: HTMLElementProps

        /**
         * The s element represents contents that are no longer accurate or
         * no longer relevant.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element}
         */
        s: HTMLElementProps

        /**
         * The cite element represents the title of a work (e.g.  a book, a
         * paper, an essay, a poem, a score, a song, a script, a film, a TV
         * show, a game, a sculpture, a painting, a theatre production, a
         * play, an opera, a musical, an exhibition, a legal case report, a
         * computer program, etc.).  This can be a work that is being quoted
         * or referenced in detail (i.e., a citation), or it can just be a
         * work that is mentioned in passing.
         *
         * A person's name is not the title of a work — even if people call
         * that person a piece of work — and the element must therefore not
         * be used to mark up people's names.  (In some cases, the b element
         * might be appropriate for names; e.g.  in a gossip article where
         * the names of famous people are keywords rendered with a different
         * style to draw attention to them.  In other cases, if an element
         * is really needed, the span element can be used.)
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element}
         */
        cite: HTMLElementProps

        /**
         * The q element represents some phrasing content quoted from
         * another source.
         *
         * Quotation punctuation (such as quotation marks) that is quoting
         * the contents of the element must not appear immediately before,
         * after, or inside q elements; they will be inserted into the
         * rendering by the user agent.
         *
         * Content inside a q element must be quoted from another source,
         * whose address, if it has one, may be cited in the cite attribute.
         * The source may be fictional, as when quoting characters in a
         * novel or screenplay.
         *
         * If the cite attribute is present, it must be a valid URL
         * potentially surrounded by spaces.  To obtain the corresponding
         * citation link, the value of the attribute must be parsed relative
         * to the element's node document.  User agents may allow users to
         * follow such citation links, but they are primarily intended for
         * private use (e.g., by server-side scripts collecting statistics
         * about a site's use of quotations), not for readers.
         *
         * The q element must not be used in place of quotation marks that
         * do not represent quotes; for example, it is inappropriate to use
         * the q element for marking up sarcastic statements.
         *
         * The use of q elements to mark up quotations is entirely optional;
         * using explicit quotation punctuation without q elements is just
         * as correct.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element}
         */
        q: HTMLQuoteElementProps

        /**
         * The dfn element represents the defining instance of a term.  The
         * paragraph, description list group, or section that is the nearest
         * ancestor of the dfn element must also contain the definition(s)
         * for the term given by the dfn element.
         *
         * Defining term: if the dfn element has a title attribute, then the
         * exact value of that attribute is the term being defined.
         * Otherwise, if it contains exactly one element child node and no
         * child Text nodes, and that child element is an abbr element with
         * a title attribute, then the exact value of that attribute is the
         * term being defined.  Otherwise, it is the descendant text content
         * of the dfn element that gives the term being defined.
         *
         * If the title attribute of the dfn element is present, then it
         * must contain only the term being defined.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element}
         */
        dfn: HTMLElementProps

        /**
         * The abbr element represents an abbreviation or acronym,
         * optionally with its expansion.  The title attribute may be used
         * to provide an expansion of the abbreviation.  The attribute, if
         * specified, must contain an expansion of the abbreviation, and
         * nothing else.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element}
         */
        abbr: HTMLElementProps

        /**
         * The ruby element allows one or more spans of phrasing content to
         * be marked with ruby annotations.  Ruby annotations are short runs
         * of text presented alongside base text, primarily used in East
         * Asian typography as a guide for pronunciation or to include other
         * annotations.  In Japanese, this form of typography is also known
         * as _furigana_.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element}
         */
        ruby: HTMLElementProps

        /**
         * The rt element marks the ruby text component of a ruby
         * annotation.  When it is the child of a ruby element, it doesn't
         * represent anything itself, but the ruby element uses it as part
         * of determining what it represents.
         *
         * An rt element that is not a child of a ruby element represents
         * the same thing as its children.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element}
         */
        rt: HTMLElementProps

        /**
         * The rp element can be used to provide parentheses or other
         * content around a ruby text component of a ruby annotation, to be
         * shown by user agents that don't support ruby annotations.
         *
         * An rp element that is a child of a ruby element represents
         * nothing.  An rp element whose parent element is not a ruby
         * element represents its children.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element}
         */
        rp: HTMLElementProps

        /**
         * The data element represents its contents, along with a
         * machine-readable form of those contents in the value attribute.
         *
         * The value attribute must be present.  Its value must be a
         * representation of the element's contents in a machine-readable
         * format.
         *
         * **NOTE** When the value is date- or time-related, the more
         * **specific time element can be used instead.
         *
         * The element can be used for several purposes.
         *
         * When combined with microformats or the microdata attributes
         * defined in this specification, the element serves to provide both
         * a machine-readable value for the purposes of data processors, and
         * a human-readable value for the purposes of rendering in a web
         * browser.  In this case, the format to be used in the value
         * attribute is determined by the microformats or microdata
         * vocabulary in use.
         *
         * The element can also, however, be used in conjunction with
         * scripts in the page, for when a script has a literal value to
         * store alongside a human-readable value.  In such cases, the
         * format to be used depends only on the needs of the script.  (The
         * data-* attributes can also be useful in such situations.)
         *
         * The value IDL attribute must reflect the content attribute of the
         * same name.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element}
         */
        data: HTMLDataElementProps

        /**
         * The time element represents its contents, along with a
         * machine-readable form of those contents in the datetime
         * attribute.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element}
         */
        time: HTMLTimeElementProps

        /**
         * The code element represents a fragment of computer code.  This
         * could be an XML element name, a filename, a computer program, or
         * any other string that a computer would recognize.
         *
         * There is no formal way to indicate the language of computer code
         * being marked up.  Authors who wish to mark code elements with the
         * language used, e.g.  so that syntax highlighting scripts can use
         * the right rules, can use the class attribute, e.g.  by adding a
         * class prefixed with "language-" to the element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element}
         */
        code: HTMLElementProps

        /**
         * The var element represents a variable.  This could be an actual
         * variable in a mathematical expression or programming context, an
         * identifier representing a constant, a symbol identifying a
         * physical quantity, a function parameter, or just be a term used
         * as a placeholder in prose.
         *
         * For mathematics, in particular for anything beyond the simplest
         * of expressions, MathML is more appropriate.  However, the var
         * element can still be used to refer to specific variables that are
         * then mentioned in MathML expressions.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element}
         */
        var: HTMLElementProps

        /**
         * The samp element represents sample or quoted output from another
         * program or computing system.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element}
         */
        samp: HTMLElementProps

        /**
         * The kbd element represents user input (typically keyboard input,
         * although it may also be used to represent other input, such as
         * voice commands).
         *
         * When the kbd element is nested inside a samp element, it
         * represents the input as it was echoed by the system.
         *
         * When the kbd element contains a samp element, it represents input
         * based on system output, for example invoking a menu item.
         *
         * When the kbd element is nested inside another kbd element, it
         * represents an actual key or other single unit of input as
         * appropriate for the input mechanism.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element}
         */
        kbd: HTMLElementProps

        /**
         * The sup element represents a superscript and the sub element
         * represents a subscript.
         *
         * These elements must be used only to mark up typographical
         * conventions with specific meanings, not for typographical
         * presentation for presentation's sake.  For example, it would be
         * inappropriate for the sub and sup elements to be used in the name
         * of the LaTeX document preparation system.  In general, authors
         * should use these elements only if the absence of those elements
         * would change the meaning of the content.
         *
         * In certain languages, superscripts are part of the typographical
         * conventions for some abbreviations.
         *
         * The sub element can be used inside a var element, for variables
         * that have subscripts.
         *
         * Mathematical expressions often use subscripts and superscripts.
         * Authors are encouraged to use MathML for marking up mathematics,
         * but authors may opt to use sub and sup if detailed mathematical
         * markup is not desired.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements}
         */
        sub: HTMLElementProps

        /**
         * The sup element represents a superscript and the sub element
         * represents a subscript.
         *
         * These elements must be used only to mark up typographical
         * conventions with specific meanings, not for typographical
         * presentation for presentation's sake.  For example, it would be
         * inappropriate for the sub and sup elements to be used in the name
         * of the LaTeX document preparation system.  In general, authors
         * should use these elements only if the absence of those elements
         * would change the meaning of the content.
         *
         * In certain languages, superscripts are part of the typographical
         * conventions for some abbreviations.
         *
         * The sub element can be used inside a var element, for variables
         * that have subscripts.
         *
         * Mathematical expressions often use subscripts and superscripts.
         * Authors are encouraged to use MathML for marking up mathematics,
         * but authors may opt to use sub and sup if detailed mathematical
         * markup is not desired.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements}
         */
        sup: HTMLElementProps

        /**
         * The i element represents a span of text in an alternate voice or
         * mood, or otherwise offset from the normal prose in a manner
         * indicating a different quality of text, such as a taxonomic
         * designation, a technical term, an idiomatic phrase from another
         * language, transliteration, a thought, or a ship name in Western
         * texts.
         *
         * Terms in languages different from the main text should be
         * annotated with lang attributes (or, in XML, lang attributes in
         * the XML namespace).
         *
         * Authors can use the class attribute on the i element to identify
         * why the element is being used, so that if the style of a
         * particular use (e.g.  dream sequences as opposed to taxonomic
         * terms) is to be changed at a later date, the author doesn't have
         * to go through the entire document (or series of related
         * documents) annotating each use.
         *
         * Authors are encouraged to consider whether other elements might
         * be more applicable than the i element, for instance the em
         * element for marking up stress emphasis, or the dfn element to
         * mark up the defining instance of a term.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element}
         */
        i: HTMLElementProps

        /**
         * The b element represents a span of text to which attention is
         * being drawn for utilitarian purposes without conveying any extra
         * importance and with no implication of an alternate voice or mood,
         * such as key words in a document abstract, product names in a
         * review, actionable words in interactive text-driven software, or
         * an article lede.
         *
         * As with the i element, authors can use the class attribute on the
         * b element to identify why the element is being used, so that if
         * the style of a particular use is to be changed at a later date,
         * the author doesn't have to go through annotating each use.
         *
         * The b element should be used as a last resort when no other
         * element is more appropriate.  In particular, headings should use
         * the h1 to h6 elements, stress emphasis should use the em element,
         * importance should be denoted with the strong element, and text
         * marked or highlighted should use the mark element.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element}
         */
        b: HTMLElementProps

        /**
         * The u element represents a span of text with an unarticulated,
         * though explicitly rendered, non-textual annotation, such as
         * labeling the text as being a proper name in Chinese text (a
         * Chinese proper name mark), or labeling the text as being
         * misspelt.
         *
         * In most cases, another element is likely to be more appropriate:
         * for marking stress emphasis, the em element should be used; for
         * marking key words or phrases either the b element or the mark
         * element should be used, depending on the context; for marking
         * book titles, the cite element should be used; for labeling text
         * with explicit textual annotations, the ruby element should be
         * used; for technical terms, taxonomic designation,
         * transliteration, a thought, or for labeling ship names in Western
         * texts, the i element should be used.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element}
         */
        u: HTMLElementProps

        /**
         * The mark element represents a run of text in one document marked
         * or highlighted for reference purposes, due to its relevance in
         * another context.  When used in a quotation or other block of text
         * referred to from the prose, it indicates a highlight that was not
         * originally present but which has been added to bring the reader's
         * attention to a part of the text that might not have been
         * considered important by the original author when the block was
         * originally written, but which is now under previously unexpected
         * scrutiny.  When used in the main prose of a document, it
         * indicates a part of the document that has been highlighted due to
         * its likely relevance to the user's current activity.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element}
         */
        mark: HTMLElementProps

        /**
         * The bdi element represents a span of text that is to be isolated
         * from its surroundings for the purposes of bidirectional text
         * formatting.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element}
         */
        bdi: HTMLElementProps

        /**
         * The bdo element represents explicit text directionality
         * formatting control for its children.  It allows authors to
         * override the Unicode bidirectional algorithm by explicitly
         * specifying a direction override.  [BIDI]
         *
         * Authors must specify the dir attribute on this element, with the
         * value ltr to specify a left-to-right override and with the value
         * rtl to specify a right-to-left override.  The auto value must not
         * be specified.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element}
         */
        bdo: HTMLElementProps

        /**
         * The span element doesn't mean anything on its own, but can be
         * useful when used together with the global attributes, e.g.
         * class, lang, or dir.  It represents its children.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element}
         */
        span: HTMLElementProps

        /**
         * The br element represents a line break.
         *
         * br elements must not be used for separating thematic groups in a
         * paragraph.
         *
         * If a paragraph consists of nothing but a single br element, it
         * represents a placeholder blank line (e.g.  as in a template).
         * Such blank lines must not be used for presentation purposes.
         *
         * Any content inside br elements must not be considered part of the
         * surrounding text.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element}
         */
        br: HTMLElementProps

        /**
         * The wbr element represents a line break opportunity.
         *
         * Any content inside wbr elements must not be considered part of
         * the surrounding text.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element}
         */
        wbr: HTMLElementProps

        // 4.6 Links
        // doesn't specify own tags

        // 4.7 Edits

        /**
         * The ins element represents an addition to the document.
         *
         * ins elements should not cross implied paragraph boundaries.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/edits.html#the-ins-element}
         */
        ins: HTMLModElementProps

        /**
         * The del element represents a removal from the document.
         *
         * del elements should not cross implied paragraph boundaries.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/edits.html#the-del-element}
         */
        del: HTMLModElementProps

        // 4.8 Embedded content

        /**
         * The picture element is a container which provides multiple
         * sources to its contained img element to allow authors to
         * declaratively control or give hints to the user agent about which
         * image resource to use, based on the screen pixel density,
         * viewport size, image format, and other factors.  It represents
         * its children.
         *
         * **NOTE** The picture element is somewhat different from the
         * similar-looking video and audio elements.  While all of them
         * contain source elements, the source element's src attribute has
         * no meaning when the element is nested within a picture element,
         * and the resource selection algorithm is different.  Also, the
         * picture element itself does not display anything; it merely
         * provides a context for its contained img element that enables it
         * to choose from multiple URLs.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element}
         */
        picture: HTMLElementProps

        /**
         * The source element allows authors to specify multiple alternative
         * source sets for img elements or multiple alternative media
         * resources for media elements.  It does not represent anything on
         * its own.
         *
         * The type attribute may be present.  If present, the value must be
         * a valid MIME type string.
         *
         * The media attribute may also be present.  If present, the value
         * must contain a valid media query list.  The user agent will skip
         * to the next source element if the value does not match the
         * environment.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element}
         */
        source: HTMLSourceElementProps

        /**
         * An img element represents an image.
         *
         * An img element has a dimension attribute source, initially set to
         * the element itself.
         *
         * The image given by the src and srcset attributes, and any
         * previous sibling source elements' srcset attributes if the parent
         * is a picture element, is the embedded content; the value of the
         * alt attribute provides equivalent content for those who cannot
         * process images or who have image loading disabled (i.e.  it is
         * the img element's fallback content).
         *
         * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element}
         */
        img: HTMLImageElementProps

        /**
         * The iframe element represents its content navigable.
         *
         * The src attribute gives the URL of a page that the element's
         * content navigable is to contain.  The attribute, if present, must
         * be a valid non-empty URL potentially surrounded by spaces.  If
         * the itemprop attribute is specified on an iframe element, then
         * the src attribute must also be specified.
         *
         * The srcdoc attribute gives the content of the page that the
         * element's content navigable is to contain.  The value of the
         * attribute is the source of an iframe srcdoc document.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element}
         */
        iframe: HTMLIFrameElementProps

        /**
         * The embed element provides an integration point for an external
         * application or interactive content.
         *
         * The src attribute gives the URL of the resource being embedded.
         * The attribute, if present, must contain a valid non-empty URL
         * potentially surrounded by spaces.
         *
         * If the itemprop attribute is specified on an embed element, then
         * the src attribute must also be specified.
         *
         * The type attribute, if present, gives the MIME type by which the
         * plugin to instantiate is selected.  The value must be a valid
         * MIME type string.  If both the type attribute and the src
         * attribute are present, then the type attribute must specify the
         * same type as the explicit Content-Type metadata of the resource
         * given by the src attribute.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element}
         */
        embed: HTMLEmbedElementProps

        /**
         * The object element can represent an external resource, which,
         * depending on the type of the resource, will either be treated as
         * an image or as a child navigable.
         *
         * The data attribute specifies the URL of the resource.  It must be
         * present, and must contain a valid non-empty URL potentially
         * surrounded by spaces.
         *
         * The type attribute, if present, specifies the type of the
         * resource.  If present, the attribute must be a valid MIME type
         * string.
         *
         * The name attribute, if present, must be a valid navigable target
         * name.  The given value is used to name the element's content
         * navigable, if applicable, and if present when the element's
         * content navigable is created.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element}
         */
        object: HTMLObjectElementProps

        /**
         * @deprecated
         */
        param: HTMLParamElementProps

        /**
         * A video element is used for playing videos or movies, and audio
         * files with captions.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/media.html#the-video-element}
         */
        video: HTMLVideoElementProps

        /**
         * An audio element represents a sound or audio stream.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/media.html#the-audio-element}
         */
        audio: HTMLMediaElementProps

        /**
         * The track element allows authors to specify explicit external
         * timed text tracks for media elements.  It does not represent
         * anything on its own.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/media.html#the-track-element}
         */
        track: HTMLTrackElementProps

        /**
         * The map element, in conjunction with an img element and any area
         * element descendants, defines an image map.  The element
         * represents its children.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element}
         */
        map: HTMLMapElementProps

        /**
         * The area element represents either a hyperlink with some text and
         * a corresponding area on an image map, or a dead area on an image
         * map.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element}
         */
        area: HTMLAreaElementProps

        // 4.8 MathML, SVG

        // 4.9 Tabular data

        /**
         *
         * @see {@link }
         */
        table: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        caption: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        colgroup: HTMLTableColElementProps

        /**
         *
         * @see {@link }
         */
        col: HTMLTableColElementProps

        /**
         *
         * @see {@link }
         */
        tbody: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        thead: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        tfoot: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        tr: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        td: HTMLTableCellElementProps

        /**
         *
         * @see {@link }
         */
        th: HTMLTableCellElementProps

        // 4.10 Forms

        /**
         *
         * @see {@link }
         */
        form: HTMLFormElementProps

        /**
         *
         * @see {@link }
         */
        label: HTMLLabelElementProps

        /**
         *
         * @see {@link }
         */
        input: HTMLInputElementProps

        /**
         *
         * @see {@link }
         */
        button: HTMLButtonElementProps

        /**
         *
         * @see {@link }
         */
        select: HTMLSelectElementProps

        /**
         *
         * @see {@link }
         */
        datalist: HTMLInputElementProps

        /**
         *
         * @see {@link }
         */
        optgroup: HTMLOptGroupElementProps

        /**
         *
         * @see {@link }
         */
        option: HTMLOptionElementProps

        /**
         *
         * @see {@link }
         */
        textarea: HTMLTextAreaElementProps

        /**
         *
         * @see {@link }
         */
        output: HTMLOutputElementProps

        /**
         *
         * @see {@link }
         */
        progress: HTMLProgressElementProps

        /**
         *
         * @see {@link }
         */
        meter: HTMLMeterElementProps

        /**
         *
         * @see {@link }
         */
        fieldset: HTMLFieldSetElementProps

        /**
         *
         * @see {@link }
         */
        legend: HTMLElementProps

        // 4.11 Interactive elements

        /**
         *
         * @see {@link }
         */
        details: HTMLDetailsElementProps

        /**
         *
         * @see {@link }
         */
        summary: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        dialog: HTMLDialogElementProps

        // 4.12 Scripting

        /**
         *
         * @see {@link }
         */
        script: HTMLScriptElementProps

        /**
         *
         * @see {@link }
         */
        noscript: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        template: HTMLElementProps

        /**
         *
         * @see {@link }
         */
        slot: HTMLSlotElementProps

        /**
         *
         * @see {@link }
         */
        canvas: HTMLCanvasElementProps

        /**
         *
         * @see {@link }
         */
        strike: HTMLElementProps

        // SVG

        /**
         *
         * @see {@link }
         */
        svg: SVGProps

        /**
         *
         * @see {@link }
         */
        line: {
            // SVG 5.12.2
            id?: string

            // stroke properties
            stroke?: string | number
            strokeWidth?: string // length percentage
            strokeLinecap?: "butt" | "round" | "square"
            strokeLinejoin?: "miter" | "miter-clip" | "round" | "bevel" | "arcs"
            strokeMiterlimit?: string | number
            // strokeDasharray?:
            strokeDashoffset?: string // length percentage

            cursor?: string
            class?: string

            // line
            x1: string | number
            y1: string | number
            x2: string | number
            y2: string | number
            // pathLength
            set?: Reference<any>
        }

        /**
         *
         * @see {@link }
         */
        rect: {
            x: string | number
            y: string | number
            width: string | number
            height: string | number
            rx?: string | number
            ry?: string | number
            stroke?: string
            fill?: string
            cursor?: string
            class?: string
            set?: Reference<any>
            onmousedown?: (event: MouseEvent) => void
            onmousemove?: (event: MouseEvent) => void
            onmouseup?: (event: MouseEvent) => void
            onmouseenter?: (event: MouseEvent) => void
            onmouseleave?: (event: MouseEvent) => void
            onmouseout?: (event: MouseEvent) => void
            onmouseover?: (event: MouseEvent) => void
        }

        /**
         *
         * @see {@link }
         */
        circle: {
            cx: string | number
            cy: string | number
            r: string | number
            stroke?: string
            fill?: string
            cursor?: string
            class?: string
            set?: Reference<any>
        }

        /**
         *
         * @see {@link }
         */
        text: {
            x: string | number
            y: string | number
            stroke?: string
            fill?: string
            cursor?: string
            class?: string
            set?: Reference<any>
        }

        /**
         *
         * @see {@link }
         */
        path: {
            d: string
            stroke?: string
            fill?: string
            cursor?: string
            class?: string
            set?: Reference<any>
        }
    }
}

export class Reference<T> {
    object: Object
    attribute: string
    constructor(object: Object, attribute: keyof T) {
        this.object = object
        this.attribute = attribute.toString()
    }

    get(): any {
        return (this.object as any)[this.attribute]
    }
    set(value: any) {
        Object.defineProperty(this.object, this.attribute, { value: value, writable: true })
    }

    toString(): string {
        return `${(this.object as any)[this.attribute]}`
    }
    fromString(value: string) {
        const type = typeof (this.object as any)[this.attribute]
        let outValue
        switch (type) {
            case "string":
                outValue = value
                break
            case "number":
                outValue = Number.parseFloat(value)
                break
            default:
                throw Error(`Reference.fromString() isn't yet supported for type ${type}`)
        }
        Object.defineProperty(this.object, this.attribute, { value: outValue, writable: true })
    }
}

export function ref<T extends Object>(object: T, attribute: keyof T): Reference<T> {
    return new Reference<T>(object, attribute)
}

export function refs<T extends Object>(object: T, ...attributes: (keyof T)[]): Reference<T>[] {
    return attributes.map((a) => new Reference<T>(object, a))
}

export class Fragment extends Array<Element | Text> {
    constructor(props: any) {
        super(...props?.children)
        for (let i = 0; i < this.length; ++i) {
            const e = this[i]
            if (typeof e === "string") {
                this[i] = document.createTextNode(e)
            }
        }
    }
    replaceIn(element: Element | ShadowRoot) {
        element.replaceChildren(...this)
    }
    appendTo(element: Element | ShadowRoot) {
        for (let child of this) {
            element.appendChild(child)
        }
    }
}

type ObjectComponent = { new (...args: any[]): HTMLElement | SVGSVGElement }
type FunctionComponent = { (...args: any[]): HTMLElement | SVGSVGElement }

// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
export function jsx(nameOrConstructor: string | ObjectComponent | FunctionComponent, props: any, key?: string) {
    if (props !== undefined && props.children !== undefined) {
        props.children = [props.children]
    }
    return jsxs(nameOrConstructor, props)
}

export function jsxs(
    nameOrConstructor: string | ObjectComponent | FunctionComponent,
    props: any,
    key?: string
) {
    let namespace
    if (typeof nameOrConstructor !== "string") {
        if (nameOrConstructor.prototype !== undefined) {
            return new (nameOrConstructor as ObjectComponent)(props)
        } else {
            return (nameOrConstructor as FunctionComponent)(props)
        }
    }

    const name = nameOrConstructor as string

    switch (name) {
        case "svg":
        case "line":
        case "rect":
        case "circle":
        case "path":
        case "text":
            namespace = "http://www.w3.org/2000/svg"
            break
        default:
            namespace = "http://www.w3.org/1999/xhtml"
    }
    const tag = document.createElementNS(namespace, name) as HTMLElement | SVGSVGElement
    setInitialProperties(tag, props, namespace)
    return tag
}

export function setInitialProperties(element: HTMLElement | SVGElement, props: any, namespace?: string) {
    if (props === null || props === undefined) return

    for (let [key, value] of Object.entries(props)) {
        switch (key) {
            case "children":
                break
            case "action":
                ;(element as any).setAction(value)
                break
            case "model":
                ;(element as any).setModel(value)
                break
            case "class":
                element.classList.add(value as string) // FIXME: value is whitespace separated list
                break
            case "style":
                for (let [skey, svalue] of Object.entries(value as string)) {
                    const regex = /[A-Z]/g
                    skey = skey.replace(regex, (upperCase) => "-" + upperCase.toLowerCase())
                    if (typeof svalue === "number") {
                        svalue = `${svalue}`
                    }
                    element.style.setProperty(skey, svalue as string)
                }
                break
            case "set":
                Object.defineProperty(props.set!.object, props.set!.attribute, { value: element, writable: true })
                break
            default:
                if (key.substring(0, 2) === "on") {
                    element.addEventListener(key.substring(2), value as () => void)
                } else {
                    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                        if (namespace === "http://www.w3.org/2000/svg") {
                            const regex = /[A-Z]/g
                            key = key.replace(regex, (upperCase) => "-" + upperCase.toLowerCase())
                        }
                        element.setAttributeNS(null, key, `${value}`)
                    }
                }
        }
    }
    if (props.children !== undefined) {
        appendChildren(element, props.children)
    }
}

function appendChildren(element: HTMLElement | SVGElement, children: Array<any>) {
    for (const child of children) {
        if (child instanceof Array) {
            appendChildren(element, child)
            continue
        }
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child))
            continue
        }
        element.appendChild(child)
    }
}

// the FunctionConstructor is a hack for <></>
// actually it would be nice if we could support value objects too, eg. <TableView> instead of <toad-table>
// export function createElement(name: string, props: JSX.HTMLElementProps, ...children: any): Element
// export function createElement(name: FunctionConstructor, props: JSX.HTMLElementProps, ...children: any): Fragment
// export function createElement(name: string | FunctionConstructor, props: JSX.HTMLElementProps, ...children: any): Element | Fragment {
// }
// backward compability
export function createElement(nameOrConstructor: string | { new (...args: any[]): any }, props: any, ...children: any) {
    // console.log(`createElement(${nameOrConstructor}, ${JSON.stringify(props)}, ${children}`)

    // props: remove 'key', add 'children'
    let key
    if (props !== null) {
        if ("key" in props) {
            key = props.key
            delete props.key
        }
        if (children !== undefined) {
            props.children = children
        }
    } else {
        if (children !== undefined) props = { children }
    }
    return jsxs(nameOrConstructor, props, key)
}

export type HTMLElementProps = JSX.HTMLElementProps
