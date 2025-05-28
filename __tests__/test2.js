const FooClass = require("../foo");
const { port1, port2 } = new (require("worker_threads").MessageChannel)();
port1.close(); port2.close();

describe("Dummy Suite 2", () => {
    test("Test 2", async () => {
        console.log("start 2");
        new FooClass();
        const { port1, port2 } = new (require("worker_threads").MessageChannel)();
        port1.close(); port2.close();
        console.log("end 2");
    });
});
