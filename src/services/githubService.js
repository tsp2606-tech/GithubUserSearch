import axios from 'axios'

export const searchUser = async (username) => {
  if (!username.trim()) {
    throw new Error('Nhập username')
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
  } catch (err) {
    if (err.response?.status === 404) {
      throw new Error('User không tồn tại')
    }
    throw new Error('Lỗi khi lấy dữ liệu')
  }
}