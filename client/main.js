class A {
  get foo() {
    return 'A-foo';
  }

  get bar() {
    return 'A-bar|' + this.foo;
  }
}

class B extends A {
  get foo() {
    return 'B-foo';
  }

  get bar() {
    const bBar = 'B-bar|' + this.foo;

    // `super.bar` should be 'A-bar|B-foo'.
    return `${super.bar} - ${bBar}`;
  }
}

const x = new B;
console.log(x.bar);
