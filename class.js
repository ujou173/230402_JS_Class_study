// 클래스 선언
class student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // 클래스 내부에서 메서드 선언
  NextYearAge() {
    return Number(this.age) + 1;
  }
}

// 클래스를 이용한 객체 만들기
let a = new student('rosumin', '28', 'male');
console.log(a); // student { name: 'rosumin', age: '28', gender: 'male' }

// 클래스 내부의 메서드 호출
let b = a.NextYearAge();
console.log(b); // 29



// class A extends B -> B 클래스를 A 클래스에게 상속, B 클래스는 A의 값에 접근해서 사용이 가능해진다
class dream extends student {
  selfIntroduce() {
    return `제 이름은 ${this.name}이고 저는 ${this.age}살 입니다. `
  }
}

let c = new dream('rosumin', '28', 'male'); 
console.log(c.selfIntroduce()); // 제 이름은 rosumin이고 저는 28살 입니다.


class MyDream extends student {
  constructor(name, age, gender, dream) {
    // super를 이용해 부모 클래스의 값을 구분지어 자식 클래스에서만 사용할 값과 분리시킬 수 있다.
    super(name, age, gender);
    this.dream = dream;
  }
  Introduce() {
    // super를 이용하면 부모 클래스의 메서드를 호출 할 수 있다
    return `제 이름은 ${this.name}입니다. 내년엔 ${super.NextYearAge()}살이 되며, 장래희망은 ${this.dream}입니다.`
  }
}

let d = new MyDream('rosumin', '28', 'male', '개발자');
console.log(d.Introduce()); // 제 이름은 rosumin입니다. 내년엔 29살이 되며, 장래희망은 개발자입니다.