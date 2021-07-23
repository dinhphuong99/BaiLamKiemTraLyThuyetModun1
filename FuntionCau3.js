let Student = function () {

    this.constructor = function (name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.mathScore = 0;
        this.physicsScore = 0;
        this.chemistryScore = 0;
    }

    this.inputScores = function (math, physics, chemistry) {
        this.mathScore = math;
        this.physicsScore = physics;
        this.chemistryScore = chemistry;
    };

    this.calsAverageScores = function () {
        let avg = (this.mathScore * 2 + this.physicsScore + this.chemistryScore) / 4;
        avg = avg * 10;
        avg = Math.round(avg) / 10;
        return avg;
    }

    this.rank = function () {
        var avg1 = this.calsAverageScores();
        
        switch (true) {
            case (9 <= avg1 && avg1 <= 10):
                return "Xuất sắc";

            case (8 <= avg1):
                return "Giỏi";

            case (7 <= avg1):
                return "Khá";

            case (5 <= avg1):
                return "Trung Bình";

            case (0 <= avg1 && avg1 < 5):
                return "Yếu";

            default:
                alert("Không hợp lệ");
                break;
        }
    }

    this.printInfo = function () {
        document.write("Tên: " + this.name);
        document.write("<br>");

        document.write("Tuổi: " + this.age);
        document.write("<br>");

        document.write("Email: " + this.email);
        document.write("<br>");

        document.write("Điểm Toán: " + this.mathScore);
        document.write("<br>");

        document.write("Điểm Lý: " + this.physicsScore);
        document.write("<br>");

        document.write("Điểm Hoá: " + this.chemistryScore);
        document.write("<br>");

        document.write("Điểm trung bình: " + this.calsAverageScores());
        document.write("<br>");

        document.write("Xếp loại: " + this.rank());
        document.write("<br>");
    }
}

var an = new Student();
var binh = new Student();
var canh = new Student();

an.constructor("an", 19, "an@gmail.com");
binh.constructor("bình", 20, "binh@gmail.com");
canh.constructor("cảnh", 20, "canh@gmail.com");

an.inputScores(9, 8, 8);
binh.inputScores(7, 8, 7);
canh.inputScores(8, 7, 8);

an.printInfo();
binh.printInfo();
canh.printInfo();