import { query } from "@/app/lib/db";

export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM users ORDER BY id DESC",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {

    try {
        const {id, name,email,type } = await request.json();
        const updateUsers = await query({
            query: "INSERT INTO users (id,name,email,type) VALUES (?,?,?,?)",
            values: [id,name,email,type],
        });
        const result = updateUsers.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const user = {
            id: id,
            name: name,
           email: email,
           type: type
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            user: user
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: request
        }));
    }
}
export async function PUT(request) {

  
        const { id, name,email,type } = await request.json();
        const updateProducts = await query({
            query: "UPDATE users SET email = ?,name = ?,type = ? WHERE id = ?",
            values: [email,name,type,id],
        });
        const result = updateProducts.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            id: id,
            visitor_name: visitor_name,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
   
}


export async function DELETE(request) {

    try {
        const { id } = await request.json();
        const deleteUser = await query({
            query: "DELETE FROM users WHERE id = ?",
            values: [id],
        });
        const result = deleteUser.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            id: id,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: res
        }));
    }

}