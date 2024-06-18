"use server";

export const pay = async (userid: string | undefined, courseid:string, gross_amount:number) => {
    if (userid){
        const req = {userid: userid, courseid: courseid, gross_amount: gross_amount}

        const res = await fetch('http://localhost:3000/api/payment', {
            method: 'POST',
            body: JSON.stringify(req)
        })
        const result = await res.json()
        
        return result.token
    }
}