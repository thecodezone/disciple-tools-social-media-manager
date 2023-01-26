import { html, css } from 'lit';
import { DtText } from "@disciple.tools/web-components";

export class smmSearch extends DtText {
  static get properties() {
    return {
      ...super.properties,
      value: {type: String},
      placeholder: { type: String },
    };
  }

  static get styles() {
    return [ super.styles,
    css`
      :host {
        --dt-text-background-color: var(--surface-1);
        --dt-text-border-color: none;
        --dt-form-padding: 0 1em;
      }
      .search {
        display: flex;
        align-items: center;
        height: 3rem;
      }

      .search_input {
        flex: 1;
        height: 100%;
      }

      .search_icon {
        width: 2.5rem;
        height: 100%;
        text-align: center;
        font-size: 2rem;
      }
    `,
    ];
  }

  constructor() {
    super();
    this.placeholder = "Search";
  }

  search(e) {
    console.log(input.value);

    if (input.value === this.value) {
      return;
    } else {
      this.value = input.value;
    }

    const event = new CustomEvent('search', {
      detail: {
        value: this.value,
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }



  render() {
    return html`
    <div class="search">
        <input
          class="search_input"
          value="${this.value}"
          placeholder="${this.placeholder}"
          @change="${(e) => this.search(e)}"
        />
        <dt-icon
          class="search_icon"
          icon="ic:outline-search"
          @click="${this.search}"
        ></dt-icon>
      </div>`;
  }
}

window.customElements.define("smm-search", smmSearch);
