import { useNavigator } from "#@/app/navigator-context";

export default function LinkCardSkeleton () {
  const [ isOpen, setIsOpen ] = useNavigator();
  return (
    <button onClick={ () => {
      setIsOpen( false );
    } }>
      <span className='material-symbols-outlined'>stop</span>
      <p>link está cargando</p>
    </button>
  );
}