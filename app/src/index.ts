function start(argv: string[]) {
    console.log('Hello world!');

    const a: any = { message: 'Goodbye world!' };

    console.log(a.message); 
}

start(process.argv);
