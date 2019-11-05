const _stockUser = {
    name: 'André Rocha',
    totalPosts: 31,
    avatar: '../../assets/images/perfil.jpeg',
};

export const getStockUser = () => {
    return new Promise((res, rej) => {
        return res(_stockUser);
    })
}