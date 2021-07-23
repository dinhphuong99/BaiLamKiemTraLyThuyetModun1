let Student = function (name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.mathScore = 0;
    this.physicsScore = 0;
    this.chemistryScore = 0;

    this.setName = function (name) {
        this.name = name;
    }

    this.getName = function () {
        return this.name;
    }

    this.setAge = function (age) {
        this.age = age;
    }

    this.getAge = function () {
        return this.age;
    }

    this.setEmail = function (email) {
        this.email = email;
    }

    this.getEmail = function () {
        return this.email;
    }

    this.setMathScore = function (mathScore) {
        this.mathScore = mathScore;
    }

    this.getMathScore = function () {
        return this.mathScore;
    }

    this.setPhysicsScore = function (physicsScore) {
        this.physicsScore = physicsScore;
    }

    this.getPhysicsScore = function () {
        return this.physicsScore;
    }

    this.setChemistryScore = function (chemistryScore) {
        this.chemistryScore = chemistryScore;
    }

    this.getChemistryScore = function () {
        return this.chemistryScore;
    }

    this.inputScores = function (math, physics, chemistry){
        this.setMathScore(math);
        this.setPhysicsScore(physics);
        this.setChemistryScore(chemistry);
    };

    this.calsAverageScores = function (){
        let avg = (this.mathScore*2 + this.physicsScore + this.chemistryScore)/4;
        avg = avg*10;
        avg = Math.round(avg)/10;
        return avg;
    }

    this.rank = function () {
        let avg = this.calsAverageScores();
        switch (avg) {
            case (9<= avg && avg<=10):
                return "Xuất sắc";
            
            case (8<= avg):
                return "Giỏi";

            case (7<= avg):
                return "Khá";

            case (5<= avg):
                return "Trung Bình";

            case (0<= avg && avg <5):
                return "Yếu";

            default:
                alert("Không hợp lệ");
                break;
        }
    }

    this.printInfo = function () {
        document.write("Tên: "+ this.name);
        document.write("<br>");

        document.write("Tuổi: "+ this.age);
        document.write("<br>");

        document.write("Email: "+ this.email);
        document.write("<br>");

        document.write("Điểm Toán: "+ this.mathScore);
        document.write("<br>");

        document.write("Điểm Lý: "+ this.physicsScore);
        document.write("<br>");

        document.write("Điểm Hoá: "+ this.chemistryScore);
        document.write("<br>");

        document.write("Điểm trung bình: "+ this.calsAverageScores());
        document.write("<br>");

        document.write("Xếp loại: "+ this.rank());
        document.write("<br>");
    }
}

function main() {
    let an = Student("an", 19, "an@gmail.com");
    let binh = Student("bình", 20, "binh@gmail.com");
    let canh = Student("cảnh", 20, "canh@gmail.com");

    an.inputScores(9,8,8);
    binh.inputScores(7,8,7);
    canh.inputScores(8,7,8);

    an.printInfo();
    binh.printInfo();
    canh.printInfo();
}