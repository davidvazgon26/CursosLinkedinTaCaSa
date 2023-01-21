import useFetch from "./useFetch";

const UsandoUseFetch = ({login}) =>{

        const{loading, data, error} = useFetch(
            `https://api.github.com/users/${login}`
        );

        if(loading) return (<h2> loading...</h2>);
        if(error) return (<pre>{JSON.stringify(error,null,2)}</pre>);

        return(<div>
        {console.log(JSON.stringify(data,null,2))}
            <img src={data.avatar_url} alt={data.login}/>
            <p>El nombre es: {data.login}</p>
        </div>)

}


export default UsandoUseFetch;