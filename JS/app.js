(() => {
	"use strict";
	var s = {
			963: (s, t) => {
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.Tag = void 0),
					(t.Tag = class {
						input = document.getElementById("getAddress");
						button = document.getElementById("covertButton");
						span_1 = document.getElementById("result_1");
						span_2 = document.getElementById("result_2");
					});
			},
			459: (s, t) => {
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.Address = void 0),
					(t.Address = class {
						prefectures = ["都", "道", "府", "県"];
						cities = ["市", "区", "町", "村"];
						fullNumbers = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"];
						keywords = ["丁目", "番", "号", "ー"];
						str = [];
						index = 0;
						pushStr = "";
						limitIndex = 0;
						numbers = [];
						address;
						address_words;
						_tag;
						constructor(s) {
							(this._tag = s), (this.address = this._tag.input.value), (this.address_words = [...this._tag.input.value]);
						}
						checkAddressString() {
							for (let s = 0; s < this.address_words.length; s++) "ー" === this.address_words[s] && this.numbers.push(s);
						}
						output() {
							(this._tag.span_1.innerHTML = `${this.str[0]} ${this.str[1]} ${this.str[2]}`), (this._tag.span_2.innerHTML = `${this.str[3]}`);
						}
						result() {
							return this.str;
						}
						getPrefecture() {
							for (const s of this.prefectures)
								if (this.address.includes(s)) {
									const t = this.address.indexOf(s);
									this.str.push(`${this.address.slice(this.index, t)}`), (this.index = t + 1);
									break;
								}
						}
						getCity() {
							for (const s of this.cities)
								if (this.address.includes(s)) {
									const t = this.address.indexOf(s);
									this.str.push(`${this.address.slice(this.index, t)}`), (this.index = t + 1);
									break;
								}
						}
						getTown() {
							let s = 0,
								t = 0;
							for (const e of this.fullNumbers)
								if (this.address.includes(e)) {
									if (((this.limitIndex = this.address.indexOf(e)), (s = this.address.slice(this.index, this.limitIndex).length), s <= t)) {
										(this.pushStr = this.address.slice(this.index, this.limitIndex)), (this.index = this.limitIndex);
										continue;
									}
									t = s;
								}
							this.str.push(`${this.pushStr}`), (this.pushStr = "");
						}
						getAddressNumber() {
							if (this.address.includes("丁目") || (this.address.includes("番") && this.address.includes("号"))) {
								for (const s of this.keywords) {
									if (!this.address.includes(s)) continue;
									const t = s.length;
									if (((this.limitIndex = this.address.indexOf(s)), (this.pushStr += this.address.slice(this.index, this.limitIndex)), this.address.includes("番") && !this.address.includes("号") && this.index < this.address.length)) {
										let s = this.address.replace("丁目", "ー");
										console.log(s), (s = s.replace("番", "")), this.str.push(`${s.slice(this.index, this.address.length)}`), (this.index = this.address.length);
										break;
									}
									"号" != s && (this.pushStr += "ー"), (this.index = t + this.limitIndex);
								}
								this.index < this.address.length && ((this.pushStr += this.address.slice(this.index, this.address.length)), this.str.push(`${this.pushStr}`));
							} else this.str.push(`${this.address.slice(this.index, this.address.length)}`);
						}
					});
			},
		},
		t = {};
	function e(i) {
		var d = t[i];
		if (void 0 !== d) return d.exports;
		var n = (t[i] = { exports: {} });
		return s[i](n, n.exports, e), n.exports;
	}
	(() => {
		const s = e(963),
			t = e(459),
			i = () => {
				const t = new s.Tag();
				console.log(t.input.value), console.log(t.span_1), console.log(t.span_2);
			},
			d = () => {
				const e = new s.Tag(),
					i = new t.Address(e);
				i.getPrefecture(), i.getCity(), i.getTown(), i.getAddressNumber(), i.output(), console.log(i.result());
			};
		window.addEventListener("load", () => {
			const t = new s.Tag();
			console.log(t.input), console.log(t.span_1), console.log(t.span_2), t.input.addEventListener("input", i), t.button.addEventListener("click", d);
		});
	})();
})();
