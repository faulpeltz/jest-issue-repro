const FooClass = require("../foo");
const { port1, port2 } = new (require("worker_threads").MessageChannel)();
port1.close(); port2.close();

describe("Dummy Suite 1", () => {
    test("Test 1", async () => {
        console.log("start 1");
        new FooClass();
        const { port1, port2 } = new (require("worker_threads").MessageChannel)();
        port1.close(); port2.close();
        console.log("end 1");
    });
});
