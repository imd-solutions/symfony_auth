<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Doctrine\ORM\EntityManagerInterface;

class UserController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $em;
    private $jwtManager;
    private $tokenStorageInterface;

    public function __construct(
        private UserRepository $userRepository,
        TokenStorageInterface $tokenStorageInterface,
        JWTTokenManagerInterface $jwtManager,
        EntityManagerInterface $em
    )
{
    $this->jwtManager = $jwtManager;
    $this->tokenStorageInterface = $tokenStorageInterface;
    $this->em = $em;
}

  #[Route('/api/user', name: 'api.user')]
  public function index(UserRepository $userRepository) : Response
  {
    $decodedJwtToken = $this->jwtManager->decode($this->tokenStorageInterface->getToken());    

    return $this->userResponse($decodedJwtToken['email']);
    
  }

  #[Route('/api/update/{id}', name: 'api.update.user')]
  public function update(Request $request, $id) : Response
  {         
        $jsonData = json_decode($request->getContent());
      
        $user = $this->em->getRepository(User::class)->find($id);

        if($user instanceOf User) {
            $user->setName($jsonData->name);
            $user->setHouseNumber($jsonData->house_number);
            $user->setAddress($jsonData->address);
            $user->setCity($jsonData->city);
            $user->setPostcode($jsonData->postcode);
            $this->em->persist($user);
            $this->em->flush();
        }
    
        return $this->userResponse($jsonData->email);
  }

  private function userResponse($email) {
    $user = $this->em->getRepository(User::class)->findOneBy([
        'email' => $email
    ]);
    
    $response = new Response(json_encode(
        [
            "id" => $user->getId(),
            'name' => $user->getName(), 
            'email' => $user->getEmail(),
            'address' => $user->getAddress(),
            'house_number' => $user->getHouseNumber(),
            'city' => $user->getCity(),
            'postcode' => $user->getPostcode(),
        ]
    ));

    return $response;
  }

}