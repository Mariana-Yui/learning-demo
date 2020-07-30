class Random {
    constructor(array) {
        this.array = Array.isArray(array) ? array : [];
    }
    randomSort1() {
        for (let i = 0, len = this.array.length; i < len; i++) {
            const rc = Math.floor(Math.random() * len);
            const val = this.array[i];
            this.array[i] = this.array[rc];
            this.array[rc] = val;
        }
        return this.array;
    }
    randomSort2() {
        const randomArr = [];
        while (this.array.length > 0) {
            const rc = Math.floor(Math.random() * this.array.length);
            randomArr.push(this.array[rc]);
            this.array.splice(rc, 1);
        }
        this.array = randomArr;
        return this.array;
    }
    randomSort3() {
        return this.array.sort((a, b) => {
            console.log(a, b);
            return Math.random() - 0.5;
        });
    }
    randomSort(type) {
        switch (Number(type)) {
            case 1:
                return this.randomSort1();
            case 2:
                return this.randomSort2();
            case 3:
                return this.randomSort3();
        }
    }
}

const random = new Random([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(random.randomSort(1));
console.log(random.randomSort(2));
console.log(random.randomSort(3));
