module.exports = async function(req, res)

{
    const {User} = require('');
    try
    {
        
        const userData = await User.findOne(
        {
            where: { userName: req.body.userName},
            where: { email: req.body.email}
        });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect user, email or password, please try again!'});
            return;
        }

        const userPassword = await userData.checkPassword(req.body.password);

        if (!userPassword) {
            res.status(400).json({ message: 'Incorrect user, email or password, please try again!'});
            return;
        } else
        {
            req.session.save(() => {
                req.seesion.user_id = userData.id;
                req.session.logged_in = true;

                res.status(200).json({ user: userData, message: 'Welcome to Bad Code Blaster!'});
            });
            return;
        }
    } catch (error) {
        res.status(400).json(err);
    }
};