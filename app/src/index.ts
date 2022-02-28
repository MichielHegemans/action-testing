function start(argv: string[]) {
    console.log('Hello world!');

    const a: Record<string, string> = { message: 'Goodbye world!' };

    console.log(a.message);

    const b: string = 'Hello universe';
}

start(process.argv);
