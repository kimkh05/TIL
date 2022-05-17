class helloworld extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
    console.log("check observedAttribute");
  }
  connectedCallback() {
    // DOM에 추가되면 실행되는 method;
    this.innerText = "Hello, KimKyeongHo!";
    this.set();
    console.log("check connectedCallback");
  }
  disconnectedCallback() {
    // DOM에서 제거면 실행되는 method
    console.log("check disconnectedCallback");
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되면 실행되는 method
    console.log("check attributeChangedCallback");
  }
  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨지면 실행되는 method
    console.log("check adoptedCallback");
  }
  set() {
    setTimeout(() => {
      this.innerText = "My name is KimKyeongHo, too";
      console.log("1 second set()");
    }, 1000);
  }
}
customElements.define("hello-world", helloworld);

class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ["lang"];
  }
  constructor() {
    super();
    // add shadow root in constructor
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>div { background-color: #82b74b; }</style>
      <div>yey</div>
    `;
    // style 정의 및 div 생성
    this._yey = shadowRoot.querySelector("div");
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    // 여기서 lang이라는 attribute가 추가되면 if문에서 통과된다.
    if (attr == "lang") {
      let yey;
      switch (newValue) {
        case "ko":
          yey = "만세!";
          break;
        case "es":
          yey = "hooray!";
          break;
        case "jp":
          yey = "万歳!";
          break;
        default:
          yey = "yey!";
      }
      this._yey.innerText = yey;
    }
  }
  yell() {
    alert(this._yey.innerText);
  }
}
window.customElements.define("my-element", MyElement);
