

export const handler = async (event: any, context: any) => {
    console.log("Event:" + JSON.stringify(event));
    console.log("Other:" + JSON.stringify(context));
    console.log("Hello");
    function wait(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("World!"), 5000)
        });
    }
    console.log(await wait());
};
