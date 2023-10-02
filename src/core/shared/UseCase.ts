export default interface UseCase<E, S> {
    executar(entry: E): Promise<S>
}