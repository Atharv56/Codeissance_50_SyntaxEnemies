var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Smitha",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Riya",
                date: Date.now(),
                content: "Hey there, can anyone help me with this problem in knitting?"
            },
            {
                author: "Jessy",
                date: Date.now(),
                content: "Sure Tell me what is it?"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Ronita",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Shweta",
                date: Date.now(),
                content: "Can anyone help me with this pasta recipe?"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "I had made this yesterday, tell me."
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}