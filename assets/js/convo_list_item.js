import { css, html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { DtBase } from "@disciple.tools/web-components";

export class conversationList extends DtBase {
  static get properties() {
    return {
      opened: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        --dt-button-context-background-color: var(--primary-color);
        --dt-button-context-text-color: #FFFFFF;
        --dt-button-font-weight: 100;
        --dt-button-padding-y: 0em;
        --dt-button-padding-y: 0.15em;
        --dt-button-padding-x: 1em;
        --dt-button-border-radius: 0.25em;
        --dt-button-font-size: 1em;
        color: currentcolor;
        display: block;
        container-type: inline-size;
        container-name: line-container;
      }

      .line-container {
        display: grid;
        grid-template-columns: 1.5fr .75fr .75fr;
        gap: 1em 0.35em;
        place-items: center;
        border-bottom: 1px solid rgb(230, 230, 230);
        padding: 1em 0;
        margin: 0 0.5em;
      }

      .mid-line-container {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        height: 100%;
        justify-content: space-around;
      }

      .name {
        font-weight: bold;
      }

      .date {
        font-size: .75em;
        align-content: center;
      }

      .date span {
        background: var(--smm-list-date-background, #F0F0F0);
        border-radius: .25em;
        padding: .5em;
      }

      .source {
        font-size: .75em;
      }
      /* dt-button {
        flex: 1;
      } */

      @container line-container (min-width: 500px) {
        .line-container {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .mid-line-container {
          flex-flow: row;
          width: 100%;
          justify-content: space-evenly;
        }
    `;
  }

  render() {
    return html`<div class="line-container">
      <div class="name">Iman Ghaznavian</div>
      <div class="mid-line-container">
        <div class="date"><span>Dec. 22</span></div>
        <div class="source">Facebook</div>
      </div>
      <dt-button type="" title="">
          View Conversation
        </dt-button>
    </div>`;
  }

}

window.customElements.define("smm-list-item", conversationList);
