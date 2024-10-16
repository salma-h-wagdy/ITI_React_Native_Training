class LinkedList {
    constructor() {
        this.list = [];
    }

    display() {
        return this.list.map(item => item.value);
    }

    insertIndex(value) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].value >= value) {
                return i;
            }
        }
        return this.list.length;
    }

    push(value) {
        if (this.list.length > 0 && value < this.list[this.list.length - 1].value) {
            throw new Error("Value is less than the last element. Cannot push.");
        }

        const insertIndex = this.insertIndex(value);

        if (insertIndex < this.list.length && this.list[insertIndex].value === value) {
            throw new Error("Value already exists.");
        }

        this.list.splice(insertIndex, 0, { value });
    }

    unshift(value) {
        if (this.list.length > 0 && value > this.list[0].value) {
            throw new Error("Value is greater than the first element. Cannot unshift.");
        }

        if (this.list.length > 0 && value === this.list[0].value) {
            throw new Error("Value already exists.");
        }

        for (let i = this.list.length; i > 0; i--) {
            this.list[i] = this.list[i - 1];
        }

        this.list[0] = { value };
    }

    shift() {
        if (this.list.length === 0) {
            throw new Error("List is empty.");
        }

        const firstElement = this.list[0];

        for (let i = 0; i < this.list.length - 1; i++) {
            this.list[i] = this.list[i + 1];
        }

        this.list.length--;

        return firstElement;
    }

    addByVal(value) {
        if (this.list.some(item => item.value === value)) {
            throw new Error("Value already exists.");
        }

        const insertIndex = this.insertIndex(value);
        this.list.splice(insertIndex, 0, { value });
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("List is empty.");
        }

        const lastIndex = this.list.length - 1;
        const value = this.list[lastIndex];
        this.list.length = lastIndex;
        return value;
    }

    remove(value) {
        const index = this.list.findIndex(item => item.value === value);

        if (index === -1) {
            throw new Error("Data not found.");
        }

        this.list.splice(index, 1);
    }

    contains(value) {
        return this.list.some(item => item.value === value);
    }

    isEmpty() {
        return this.list.length === 0;
    }
}
