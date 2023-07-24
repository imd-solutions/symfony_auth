<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\SerializerInterface;

class AuthController extends AbstractController
{
    public function __construct(
      private UserRepository $userRepository,
      private Security $security,
      private SerializerInterface $serializer
    )
    {
      
    }
    #[Route('/auth/register', name: 'auth.register')]
    public function index(Request $request): JsonResponse
    {
        $jsonData = json_decode($request->getContent());
        $user = $this->userRepository->create($jsonData);
            
        return new JsonResponse([
          'user' => json_decode($this->serializer->serialize($user, 'json'))
        ], 201);
      }
}
