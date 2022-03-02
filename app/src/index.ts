function start(argv: string[]) {
    console.log('Hello world!');

    const a: Record<string, string> = { message: 'Goodbye world!' };

    console.log(a.message);
}

start(process.argv);
