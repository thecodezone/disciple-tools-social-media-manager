import { css, html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { DtModal } from "@disciple.tools/web-components";
import { msg } from '@lit/localize';


export class conversationModal extends DtModal {
  static get properties() {
    return {
      conversation: { type: Object },
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
      }
      `
  }

  render() {
    return html`
    <dialog
        id=""
        class="dt-modal"
        @click=${this._dialogClick}
        @keypress=${this._dialogKeypress}
      >
        TEST
    </dialog>
    <button
      class="button small opener"
      data-open=""
      aria-label="Open reveal"
      type="button"
      @click="${this._openModal}"
      style=""
    >
      <slot name="openButton">${msg('Open Dialog')}</slot>
    </button>
    `;
  }
}

window.customElements.define("smm-conversation-modal", conversationModal);
