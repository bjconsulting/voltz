import { component$ } from '@builder.io/qwik';

export default component$(() => {

    return (
        <section class="flex flex-col justify-center items-center bg-black py-[6em]">
            <div class="flex flex-col md:flex-row justify-center bg-black gap-3">
                <div class="flex flex-col items-center justify-start gap-2 grow-1 flex-shrink-1 max-w-[calc(100%/3)]">
                    <picture>
                        <img src="./src/img/9.png" alt="8x mais economia" loading='lazy' height="200px" width="400px" />
                    </picture>
                    <h3 class="font-extrabold text-2xl text-white text-center">8x mais economia</h3>
                    <p class="font-normal text-lg md:max-w-[80%] text-center text-white">A mobilidade elétrica é muito mais econômica. Com a Voltz, você não gasta dinheiro com combustível, não precisa fazer revisão obrigatória e a manutenção necessária é mínima.</p>
                </div>
                <div class="flex flex-col items-center justify-start gap-2 grow-1 flex-shrink-1 max-w-[calc(100%/3)]">
                    <picture>
                        <img src="./src/img/10.png" alt="10x mais simples" loading='lazy' height="200px" width="400px" />
                    </picture>
                    <h3 class="font-extrabold text-2xl text-white text-center">10x mais simples</h3>
                    <p class="font-normal text-lg md:max-w-[80%] text-center text-white">Composta por apenas um décimo da quantidade de peças de uma moto a combustão.</p>
                </div>
                <div class="flex flex-col items-center justify-start gap-2 grow-1 flex-shrink-1 max-w-[calc(100%/3)]">
                    <picture>
                        <img src="./src/img/3.png" alt="3 anos de garantia" loading='lazy' height="200px" width="400px" />
                    </picture>
                    <h3 class="font-extrabold text-2xl text-white text-center">3 anos de garantia</h3>
                    <p class="font-normal text-lg md:max-w-[80%] text-center text-white">
                        A Voltz oferece três anos de garantia para moto, motor e bateria (ou 1.500 ciclos).
                    </p>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button class= "text-white outline-none bg-transparent py-3 px-20 font-medium text-xl border border-voltz_blue rounded-[10px] hover:outline-none hover:text-black hover:bg-voltz_blue transition-all mt-[4em]">
                    Saiba Mais
                </button>
            </div>
        </section>
    )
})