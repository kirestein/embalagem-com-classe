import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productCategories: ProductCategory[] = [
    {
      id: 'bisnagas',
      name: 'Bisnagas',
      slug: 'bisnagas',
      description: 'Embalagens flexíveis para diversos produtos',
      image: 'products/bisnagas/Bisnagas.png',
      products: [
        {
          id: 'bisnaga-01',
          name: 'Bisnaga Padrão',
          category: 'bisnagas',
          slug: 'bisnaga-padrao',
          description: 'Bisnaga flexível ideal para produtos cosméticos e farmacêuticos',
          images: ['products/bisnagas/Bisnagas.png'],
          features: [
            'Material flexível e resistente',
            'Tampa rosqueável',
            'Fácil aplicação do produto',
            'Disponível em várias cores'
          ],
          applications: [
            'Produtos cosméticos',
            'Medicamentos tópicos',
            'Cremes e pomadas',
            'Produtos de higiene'
          ]
        }
      ]
    },
    {
      id: 'cilindrico',
      name: 'Cilíndrico',
      slug: 'cilindrico',
      description: 'Embalagens cilíndricas para diversos usos',
      image: 'products/cilindrico/cilindrico_01.png',
      products: [
        {
          id: 'cilindrico-01',
          name: 'Cilíndrico Modelo 1',
          category: 'cilindrico',
          slug: 'cilindrico-modelo-1',
          images: ['products/cilindrico/cilindrico_01.png']
        },
        {
          id: 'cilindrico-02',
          name: 'Cilíndrico Modelo 2',
          category: 'cilindrico',
          slug: 'cilindrico-modelo-2',
          images: ['products/cilindrico/cilindrico_02.png']
        }
      ]
    },
    {
      id: 'curve',
      name: 'Curve',
      slug: 'curve',
      description: 'Embalagens com design curvo e moderno',
      image: 'products/curve/curve.png',
      products: [
        {
          id: 'curve-01',
          name: 'Curve Padrão',
          category: 'curve',
          slug: 'curve-padrao',
          images: ['products/curve/curve.png']
        }
      ]
    },
    {
      id: 'essence',
      name: 'Essence',
      slug: 'essence',
      description: 'Linha premium para produtos de beleza',
      image: 'products/essence/essence.png',
      products: [
        {
          id: 'essence-01',
          name: 'Essence Premium',
          category: 'essence',
          slug: 'essence-premium',
          images: ['products/essence/essence.png']
        }
      ]
    },
    {
      id: 'infiniti',
      name: 'Infiniti',
      slug: 'infiniti',
      description: 'Design inovador e funcional',
      image: 'products/infiniti/infiniti.png',
      products: [
        {
          id: 'infiniti-01',
          name: 'Infiniti Premium',
          category: 'infiniti',
          slug: 'infiniti-premium',
          images: ['products/infiniti/infiniti.png']
        }
      ]
    },
    {
      id: 'ombro_reto',
      name: 'Ombro Reto',
      slug: 'ombro-reto',
      description: 'Embalagens com ombro reto para facilitar o manuseio',
      image: 'products/ombro_reto/ombro_reto_01.png',
      products: [
        {
          id: 'ombro-reto-01',
          name: 'Ombro Reto Modelo 1',
          category: 'ombro_reto',
          slug: 'ombro-reto-modelo-1',
          images: ['products/ombro_reto/ombro_reto_01.png']
        },
        {
          id: 'ombro-reto-02',
          name: 'Ombro Reto Modelo 2',
          category: 'ombro_reto',
          slug: 'ombro-reto-modelo-2',
          images: ['products/ombro_reto/ombro_reto_02.png']
        },
        {
          id: 'ombro-reto-03',
          name: 'Ombro Reto Modelo 3',
          category: 'ombro_reto',
          slug: 'ombro-reto-modelo-3',
          images: ['products/ombro_reto/ombro_reto_03.png']
        }
      ]
    },
    {
      id: 'onix',
      name: 'Onix',
      slug: 'onix',
      description: 'Linha elegante e sofisticada',
      image: 'products/onix/onix.png',
      products: [
        {
          id: 'onix-01',
          name: 'Onix Elegante',
          category: 'onix',
          slug: 'onix-elegante',
          images: ['products/onix/onix.png']
        }
      ]
    },
    {
      id: 'ovais',
      name: 'Ovais',
      slug: 'ovais',
      description: 'Embalagens com formato oval',
      image: 'products/ovais/ovais.png',
      products: [
        {
          id: 'ovais-01',
          name: 'Oval Clássico',
          category: 'ovais',
          slug: 'oval-classico',
          images: ['products/ovais/ovais.png']
        }
      ]
    },
    {
      id: 'pet_pvc',
      name: 'PET/PVC',
      slug: 'pet-pvc',
      description: 'Embalagens em PET e PVC de alta qualidade',
      image: 'products/pet_pvc/pet.png',
      products: [
        {
          id: 'pet-01',
          name: 'PET Premium',
          category: 'pet_pvc',
          slug: 'pet-premium',
          images: ['products/pet_pvc/pet.png']
        }
      ]
    },
    {
      id: 'potes',
      name: 'Potes',
      slug: 'potes',
      description: 'Potes para armazenamento e conservação',
      image: 'products/potes/potes_01.png',
      products: [
        {
          id: 'pote-01',
          name: 'Pote Modelo 1',
          category: 'potes',
          slug: 'pote-modelo-1',
          images: ['products/potes/potes_01.png']
        },
        {
          id: 'pote-02',
          name: 'Pote Modelo 2',
          category: 'potes',
          slug: 'pote-modelo-2',
          images: ['products/potes/potes_02.png']
        }
      ]
    },
    {
      id: 'pulverizadores',
      name: 'Pulverizadores',
      slug: 'pulverizadores',
      description: 'Sistemas de pulverização para diversos produtos',
      image: 'products/pulverizadores/pulverizador.png',
      products: [
        {
          id: 'pulverizador-01',
          name: 'Pulverizador Padrão',
          category: 'pulverizadores',
          slug: 'pulverizador-padrao',
          description: 'Sistema de pulverização eficiente para produtos líquidos',
          images: ['products/pulverizadores/pulverizador.png'],
          features: [
            'Gatilho ergonômico',
            'Bico ajustável',
            'Sistema anti-vazamento',
            'Fácil recarga'
          ],
          applications: [
            'Produtos de limpeza',
            'Cosméticos em spray',
            'Produtos de jardim',
            'Soluções desinfetantes'
          ],
          specifications: [
            { name: 'Capacidade', value: '500', unit: 'ml' },
            { name: 'Material', value: 'PP/PE' },
            { name: 'Rosca', value: '28/410' }
          ]
        }
      ]
    },
    {
      id: 'retratil',
      name: 'Retrátil',
      slug: 'retratil',
      description: 'Embalagens com sistema retrátil',
      image: 'products/retratil/retratil.png',
      products: [
        {
          id: 'retratil-01',
          name: 'Retrátil Funcional',
          category: 'retratil',
          slug: 'retratil-funcional',
          images: ['products/retratil/retratil.png']
        }
      ]
    },
    {
      id: 'tube',
      name: 'Tube',
      slug: 'tube',
      description: 'Tubos para diversos produtos',
      image: 'products/tube/tube.png',
      products: [
        {
          id: 'tube-01',
          name: 'Tube Versátil',
          category: 'tube',
          slug: 'tube-versatil',
          images: ['products/tube/tube.png']
        }
      ]
    }
  ];

  constructor() { }

  getProductCategories(): ProductCategory[] {
    return this.productCategories;
  }

  getCategoryBySlug(slug: string): ProductCategory | undefined {
    return this.productCategories.find(category => category.slug === slug);
  }

  getCategoryById(id: string): ProductCategory | undefined {
    return this.productCategories.find(category => category.id === id);
  }
}