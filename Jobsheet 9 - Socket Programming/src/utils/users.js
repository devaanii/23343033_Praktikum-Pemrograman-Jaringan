const users = [];

//Tambah Pengguna
const tambahPengguna = ({id, username, room}) => {
    // Membersihkan data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validasi data
    if (!username || !room) {
        return {
            error: 'Username dan room dibutuhkan'
        }
    }

    // Cek keberadaan user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validasi username
    if (existingUser) {
        return {
            error: 'Username sudah digunakan dalam room ini'
        }
    }

    // Simpan user
    const user = { id, username, room }
    users.push(user)
    return {user}
}

//Hapus Pengguna
const hapusPengguna = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

//Ambil Pengguna
const ambilPengguna = (id) => {
    return users.find((user) => user.id === id)
}

//Ambil Pengguna Dari Room
const ambilPenggunaDariRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room)
}

module.exports = {
    tambahPengguna,
    hapusPengguna,
    ambilPengguna,
    ambilPenggunaDariRoom
}