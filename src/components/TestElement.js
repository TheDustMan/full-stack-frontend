function formatName(user)
{
    return user.first + ' ' + user.last;
}

const user = {
    first: 'Dust',
    last: 'Man'
};

function TestElement()
{
    return (
        <h1>{formatName(user)}</h1>
    );
}

export default TestElement;