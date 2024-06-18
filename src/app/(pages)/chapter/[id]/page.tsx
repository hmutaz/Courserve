async function getContent(id: string) {
    const res = await fetch('http://localhost:3000/api/chapter-contents?id=' + id, {
        next: {
            revalidate: 0
        }
    })
    return await res.json()
}

const ChapterContent = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const content = await getContent(id)

    return (
        <>
        <div className="h-screen flex justify-center items-center">
            <iframe width="640" height="385" src={content.video_url}>
            </iframe>
        </div>
        </>
    )
}

export default ChapterContent