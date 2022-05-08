
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: create_post.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [ 100% ] 1 VUs  00m00.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 321 B 12 kB/s
     data_sent......................: 496 B 18 kB/s
     http_req_blocked...............: min=7.00ms  avg=7.00ms  med=7.00ms  p(99)=7.00ms  p(99.9)=7.00ms  max=7.00ms  count=1
     http_req_connecting............: min=1.01ms  avg=1.01ms  med=1.01ms  p(99)=1.01ms  p(99.9)=1.01ms  max=1.01ms  count=1
     http_req_duration..............: min=18.29ms avg=18.29ms med=18.29ms p(99)=18.29ms p(99.9)=18.29ms max=18.29ms count=1
       { expected_response:true }...: min=18.29ms avg=18.29ms med=18.29ms p(99)=18.29ms p(99.9)=18.29ms max=18.29ms count=1
     http_req_failed................: 0.00% ✓ 0         ✗ 1
     http_req_receiving.............: min=0.57ms  avg=0.57ms  med=0.57ms  p(99)=0.57ms  p(99.9)=0.57ms  max=0.57ms  count=1
     http_req_sending...............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_tls_handshaking.......: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_waiting...............: min=17.72ms avg=17.72ms med=17.72ms p(99)=17.72ms p(99.9)=17.72ms max=17.72ms count=1
     http_reqs......................: 1     36.454308/s
     iteration_duration.............: min=25.29ms avg=25.29ms med=25.29ms p(99)=25.29ms p(99.9)=25.29ms max=25.29ms count=1
     iterations.....................: 1     36.454308/s

